import React, { useState } from "react";
import { Form, Input, notification } from "antd";
import { Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInApi } from "../../../api/admin";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

//import "./LoginForm.scss";

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const changeForm = (e) => {
    console.log(inputs);
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    //e.preventDefault();
    //console.log(inputs);
    const result = await signInApi(inputs);

    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      notification["success"]({
        message: "Login correcto.",
      });

      window.location.href = "/admin/profile";
    }

    console.log(result);
  };

  return (
    <Form className="login-form" onChange={changeForm} onFinish={login}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}
