import React from "react";
import { Menu, Button, Table } from "antd";

import "./Publications.scss";

const { SubMenu } = Menu;

export default function Publications() {
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
      title: "Editor",
      dataIndex: "editor",
      key: "editor",
    },
    {
        title: "Publico",
        dataIndex: "public",
        key: "public",
    },
    {
        title: "Privado",
        dataIndex: "private",
        key: "private",
    },
    {
        title: "Oculto",
        dataIndex: "hidden",
        key: "hidden",
    },
    {
      title: "Acción",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <>
      <Button className="button" type="primary" onClick={toPublicationAdd}>Agregar Publicación </Button>
      <Table className="table" dataSource={dataSource} columns={columns} />
    </>
  );
}


function toPublicationAdd(){
    window.location.href="/admin/publications/publication-add";
}