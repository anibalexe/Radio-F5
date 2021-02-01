import React, { useState, useEffect } from "react";
import { Menu, Button, Table } from "antd";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersApi } from "../../../api/admin";

import "./Users.scss";

const { SubMenu } = Menu;

export default function Users() {
  const [ users, setUsers] = useState([]);
  const token = getAccessTokenApi();
  
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Usuario",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Correo electronico",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Acción",
      dataIndex: "action",
      key: "action",
    },
  ];


  useEffect( () => {
    getUsersApi(token).then(response => {
      setUsers(response);
    });
  }, [token]);
  
  return (
    <>
      <Button className="button" type="primary" onClick={toUserAdd}>Agregar Usuario </Button>
      <Table className="table" dataSource={dataSource} columns={columns} />
    </>
  );
}


function toUserAdd(){
    window.location.href="/admin/users/user-add";
}