import React, { useState , useEffect } from "react";
import { Layout, Tabs, Card } from "antd";
import { Redirect } from "react-router-dom";
import RegisterForm from "../../../components/Admin/RegisterForm";

import {
  getPublicationsVisitorApi,
} from "../../../api/publication";

import "./UserAdd.scss";

export default function UserAdd() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  const [ publications, setPublications] = useState([]);

  useEffect( () => {
    getPublicationsVisitorApi().then(response => {
      setPublications(response.publications);
    });
  });

  console.log(publications);

  return (
    <Card className="user-add__card">
      <RegisterForm />
    </Card>
  );
}



