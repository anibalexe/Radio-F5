import React, { useState } from "react";
import {
  ADMIN_NAME,
  ADMIN_LASTNAME,
  ADMIN_EMAIL,
  ADMIN_PRIVILEGE,
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

import "./UpdateForm.scss";

const RadioGroup = Radio.Group;

export default function UpdateForm() {
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

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }

    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
    }

    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };

  return (
    <>
      <Form
        className="update-form" /*onChange={changeForm} onFinish={register}*/
      >
        <Divider orientation="center">
          <h2>Perfil de usuario</h2>
        </Divider>
        <Row className="update-form__row" type="flex">
          <Col className="update-form__row-col" flex={2}>
            <Card
              type="inner"
              size="small"
              title="Foto de perfil"
              className="update-form__row-col-card"
            >
              <Image
                className="update-form__row-col-card-image"
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <Divider></Divider>
              <Upload className="update-form__row-col-card-button">
                <Button>
                  Seleccionar
                </Button>
              </Upload>
              <Divider>Información de perfil</Divider>
              <ul className="update-form__row-col-card-list">
                <li>Nombre: {localStorage.getItem(ADMIN_NAME)}</li>
                <li>Apellido: {localStorage.getItem(ADMIN_LASTNAME)}</li>
                <li>Correo electronico: {localStorage.getItem(ADMIN_EMAIL)}</li>
                <li>
                  Privilegio:{" "}
                  {localStorage.getItem(ADMIN_PRIVILEGE) == 1
                    ? "Admin"
                    : "Gestor de contenido"}
                </li>
              </ul>
            </Card>
          </Col>

          <Col flex={3}>
            <Card
              type="inner"
              size="small"
              title="Datos personales"
              className="update-form__row-col-card"
            >
              <Form.Item>
                <Input
                  prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className="update-form__input"
                  onChange={inputValidation}
                  value={inputs.email}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="update-form__input"
                  value={inputs.name}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="text"
                  name="lastname"
                  placeholder="Apellido"
                  className="update-form__input"
                  value={inputs.lastname}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="update-form__input"
                  onChange={inputValidation}
                  value={inputs.password}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="password"
                  name="repeatPassword"
                  placeholder="Repetir contraseña"
                  className="update-form__input"
                  onChange={inputValidation}
                  value={inputs.repeatPassword}
                />
              </Form.Item>
              
              <Form.Item>
                <Button htmlType="submit" className="update-form__button">
                  Actualizar datos
                </Button>
              </Form.Item>
            </Card>
          </Col>
        </Row>
      </Form>
    </>
  );
}
