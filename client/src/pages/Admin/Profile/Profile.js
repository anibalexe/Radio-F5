import React, { useState, useEffect } from "react";
import { userInfo } from "os";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersApi } from "../../../api/admin";
import UpdateForm from "../../../components/Admin/UpdateForm";
import { Layout, Tabs, Card } from "antd";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const token = getAccessTokenApi();

  useEffect(() => {
    getUsersApi(token).then((response) => {
      setUsers(response.users);
    });
  }, [token]);

  return (
    <Card className="user-update__card">
      <UpdateForm />
    </Card>
  );
}
