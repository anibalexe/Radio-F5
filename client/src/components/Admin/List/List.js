import React from "react";
import { Menu, Button, Table } from "antd";

import "./List.scss";
import { ConsoleSqlOutlined, UserSwitchOutlined } from "@ant-design/icons";

export default function List(props){
    const { users } = props;

    console.log(users);

    const dataSource = [
        {
          name: users.name,
          lastname: users.lastname,
          email: users.email,
        },
      ];

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

    return(
        <div>
            <Table className="table" dataSource={dataSource} columns={columns} />
        </div>
    );
}

