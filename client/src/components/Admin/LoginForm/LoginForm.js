import React, { useState } from "react";
import { Form, Input } from "antd";
import { Button } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {signInApi} from "../../../api/admin";

import "./LoginForm.scss";

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

  const login = (/*e*/) => {
    //e.preventDefault();
    signInApi(inputs);
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
