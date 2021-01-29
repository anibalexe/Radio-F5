import React from "react";
import { Menu, Button, Table } from "antd";

import "./Publicitys.scss";

const { SubMenu } = Menu;

export default function Publicitys() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Titular",
      dataIndex: "headline",
      key: "headline",
    },
    {
      title: "Fecha",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Acción",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <>
      <Button className="button" type="primary" onClick={toPublicityAdd}>Agregar Publicidad </Button>
      <Table className="table" dataSource={dataSource} columns={columns} />
    </>
  );
}


function toPublicityAdd(){
    window.location.href="/admin/publicity/publicity-add";
}