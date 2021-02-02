import React from "react";
import { Menu, Button, Table, Space } from "antd";

import "./ListUsers.scss";
import { ConsoleSqlOutlined, UserSwitchOutlined, DeleteOutlined, EditOutlined  } from "@ant-design/icons";
import UserEdit from "../../../pages/Admin/UserEdit";

export default function List(props) {
  const { users } = props;

  console.log(users);

  const columns = [
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
      title: "Correo electrónico",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Privilegio",
      dataIndex: "privilege",
      key: "privilege",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Acción",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" >
            <EditOutlined />
          </Button>
          <Button type="primary" danger>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button className="button" type="primary" onClick={toUserAdd}>
        Agregar Usuario{" "}
      </Button>
      <Table
        className="table"
        dataSource={users}
        columns={columns}
        
      />
    </>
  );
}

function toUserAdd() {
  window.location.href = "/admin/users/user-add";
}

