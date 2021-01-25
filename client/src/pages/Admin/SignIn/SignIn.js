import React from "react";

import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo.png";
import LoginForm from "../../../components/Admin/LoginForm";

import "./SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Ingresar</span>}>
              <h1 className="sign-in__content-logo">
                <img src={Logo} />
              </h1>
              <LoginForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}