import React from "react";

import { Layout, Tabs, Space, Card } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/LogoProvisorio.png";
import LoginForm from "../../../components/Admin/LoginForm";
//import {getAccessTokenApi} from "../../../api/auth";

import "./SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  /*if(getAccessTokenApi()){
    return <Redirect to="/admin" />;
  }*/
  
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <div className="sign-in__content-tabs">
          <Space direction="vertical " style={{width: 300}}>
            <Card>
              <h1 className="sign-in__content-logo">
                <img src={Logo} />
              </h1>
              <LoginForm />
            </Card>
          </Space>
        </div>
      </Content>
    </Layout>
  );
}
