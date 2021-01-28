import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import RegisterForm from "../../../components/Admin/RegisterForm";

import "./UserAdd.scss";

export default function UserAdd() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <Layout className="user-add">
      <Content className="user-add__content">
        <div className="user-add__content-tabs">
          <Tabs type="card">
            <TabPane>
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}