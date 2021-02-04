import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  notification,
  Row,
  Col,
  Divider,
  Upload,
  Image,
  Card,
  Select,
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { updateAdminApi } from "../../../api/admin";

import "./EditUserForm.scss";
import FormItem from "antd/lib/form/FormItem";
import {
  emailValidation,
  minLengthValidation,
} from "../../../utils/formValidation";
import { getAccessTokenApi } from "../../../api/auth";

const RadioGroup = Radio.Group;

export default function EditUserForm(props) {
  const { user, setIsVisibleModal, setReloadUsers } = props;
  //const [avatar, setAvatar] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      privilege: user.provilege,
      status: user.status,
      //avatar: user.avatar
    });
  }, [user]);

  const updateUser = (e) => {
    //e.preventDefault();
    const token = getAccessTokenApi();
    let userUpdate = userData;

    console.log(userData);

    if (
      !userUpdate.name ||
      !userUpdate.lastname ||
      !userUpdate.email ||
      !userUpdate.privilege ||
      !userUpdate.status
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
      return;
    }

    /*if (typeof userUpdate.avatar === "object") {
      uploadAvatarApi(token, userUpdate.avatar, user._id).then((response) => {
        userUpdate.avatar = response.avatarName;
        updateUserApi(token, userUpdate, user._id).then((result) => {
          notification["success"]({
            message: result.message,
          });
          setIsVisibleModal(false);
          setReloadUsers(true);
        });
      });
    } else {*/

    updateAdminApi(token, userUpdate, user._id).then((result) => {
      notification["success"]({
        message: result.message,
      });
      setIsVisibleModal(false);
      setReloadUsers(true);
    });
  };

  return (
    <>
      <EditForm
        userData={userData}
        setUserData={setUserData}
        updateUser={updateUser}
      />
    </>
  );
}

function EditForm(props) {
  const { userData, setUserData, updateUser } = props;

  return (
    <Form className="register-form" onFinish={updateUser}>
      <Row className="register-form__row" type="flex">
        <Col flex={2}>
          <Card
            type="inner"
            size="small"
            title="Foto de perfil"
            className="register-form__card"
          >
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Divider></Divider>
            <Upload>
              <Button className="register-form__card-button">
                Seleccionar
              </Button>
            </Upload>
          </Card>
        </Col>

        <Col flex={3}>
          <Card
            type="inner"
            size="small"
            title="Datos personales"
            className="register-form__card"
          >
            <Form.Item>
              <Input
                prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="register-form__input"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                value={userData.email}
              />
            </Form.Item>

            <Form.Item>
              <Input
                prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                type="text"
                name="name"
                placeholder="Nombre"
                className="register-form__input"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                value={userData.name}
              />
            </Form.Item>

            <Form.Item>
              <Input
                prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                type="text"
                name="lastname"
                placeholder="Apellido"
                className="register-form__input"
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
                value={userData.lastname}
              />
            </Form.Item>
          </Card>

          <Card
            type="inner"
            size="small"
            title="Permisos de la cuenta"
            className="register-form__card"
          >
            <Form.Item>
              <RadioGroup
                name="privilege"
                onChange={(e) =>
                  setUserData({ ...userData, privilege: e.target.value })
                }
              >
                <Radio value="1">Administrador</Radio>
                <Radio value="2">Gestor de contenido</Radio>
              </RadioGroup>
            </Form.Item>
          </Card>

          <Card
            type="inner"
            size="small"
            title="Estado de la cuenta"
            className="register-form__card"
          >
            <Form.Item>
              <RadioGroup
                name="status"
                onChange={(e) =>
                  setUserData({ ...userData, status: e.target.value })
                }
              >
                <Radio value="1">Activo</Radio>
                <Radio value="2">Inactivo</Radio>
              </RadioGroup>
            </Form.Item>
          </Card>

          <Form.Item>
            <Button htmlType="submit" className="register-form__button">
              Aceptar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
