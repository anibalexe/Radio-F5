import React, { useState, useEffect } from "react";
import {
  ADMIN_NAME,
  ADMIN_LASTNAME,
  ADMIN_EMAIL,
  ADMIN_PRIVILEGE,
  ADMIN_ID,
} from "../../../utils/constants";
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
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";
import {
  emailValidation,
  minLengthValidation,
} from "../../../utils/formValidation";

import "./EditProfileForm.scss";
import { getUserApi } from "../../../api/admin";
import { updateAdminApi } from "../../../api/admin";
import { updateAdminPasswordApi } from "../../../api/admin";
import { getAccessTokenApi } from "../../../api/auth";

const RadioGroup = Radio.Group;

export default function EditProfileForm() {
  const token = getAccessTokenApi();

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    lastname: "",
    password: "",
    repeatPassword: "",
    privilege: "",
  });

  const [formValid, setFormValid] = useState({
    email: false,
    name: false,
    lastname: false,
    password: false,
    repeatPassword: false,
    privilege: false,
  });

  const [userData, setUserData] = useState({});

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }

    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
    }
  };

  useEffect(() => {
    getUserApi(token, localStorage.getItem(ADMIN_ID)).then((response) => {
      setUserData(response.userData);
    });
  }, [token]);

  const updateUser = (e) => {
    //e.preventDefault();
    const token = getAccessTokenApi();
    let userUpdate = userData;

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

    updateAdminApi(token, userUpdate, userData._id).then((result) => {
      notification["success"]({
        message: result.message,
      });
    });
  };

  const updateUserPassword = (e) => {
    //e.preventDefault();
    const token = getAccessTokenApi();
    let userUpdate = userData;

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

    updateAdminPasswordApi(token, userUpdate, userData._id).then((result) => {
      notification["success"]({
        message: result.message,
      });
    });
  };

  return (
    <>
      <ProfileForm
        userData={userData}
        setUserData={setUserData}
        updateUser={updateUser}
        inputValidation={inputValidation}
        updateUserPassword={updateUserPassword}
      />
    </>
  );
}

function ProfileForm(props) {
  const { userData, setUserData, updateUser, updateUserPassword } = props;

  return (
    <Row className="row" type="flex">
      <Divider orientation="center">
          <h2>Perfil de usuario</h2>
        </Divider>
      <Col className="row__col" flex={2}>
        <Card
          type="inner"
          size="small"
          title="Foto de perfil"
          className="row__col__card"
        >
          <Image
            className="row__col__card__image"
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Divider></Divider>
          <Upload className="row__col__card__button">
            <Button>Seleccionar</Button>
          </Upload>
          <Divider>
            Cargo:{" "}
            {userData.privilege == "1"
              ? "Administrador"
              : "Gestor de contenido"}
          </Divider>
        </Card>
      </Col>

      <Col className="row__col" flex={3}>
        <Card
          type="inner"
          size="small"
          title="Datos personales"
          className="row__col__card"
        >
          <Form className="row__col__card__editprofile-form" onFinish={updateUser}>
            <Form.Item>
              <Input
                prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="row__col__card__editprofile-form__input"
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
                className="row__col__card__editprofile-form__input"
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
                className="row__col__card__editprofile-form__input"
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
                value={userData.lastname}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="row__col__card__editprofile-form__button">
                Actualizar datos
              </Button>
            </Form.Item>
          </Form>
          <Divider></Divider>
          <Form className="row__col__card__editprofile-form" onFinish={updateUserPassword}>
            <Form.Item>
              <Input
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                name="password"
                placeholder="Contraseña"
                className="row__col__card__editprofile-form__input"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </Form.Item>

            <Form.Item>
              <Input
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                name="repeatPassword"
                placeholder="Repetir contraseña"
                className="row__col__card__editprofile-form__input"
                onChange={(e) =>
                  setUserData({ ...userData, repeatPassword: e.target.value })
                }
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" className="row__col__card__editprofile-form__button">
                Actualizar contraseña
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
