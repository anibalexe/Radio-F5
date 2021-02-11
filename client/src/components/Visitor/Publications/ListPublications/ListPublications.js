import React, { useState, useEffect } from "react";
import { Menu, Button, List, Space, Card, Divider, notification } from "antd";

import PublicationPreview from "../PublicationPreview";

import "./ListPublications.scss";

export default function ListPublications(props) {
  const { publications, setReloadPublications } = props;

  //console.log(users);

  return (
    <Card className="list-publications__card">
      <Publications
        publications={publications}
        setReloadPublications={setReloadPublications}
      />
    </Card>
  );
}

function Publications(props) {
  const { publications } = props;

  const { setReloadPublications } = props;

  return (
    <List
      className="publications"
      itemLayout="horizontal"
      dataSource={publications}
      renderItem={(publication) => (
        <Publication
          publication={publication}
          setReloadPublications={setReloadPublications}
        />
      )}
    />
  );
}

function Publication(props) {
  const { publication, setReloadPublications } = props;

  return (
    <>
      <List.Item>
        <List.Item.Meta
          //avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
          title={`
                ${publication.title ? publication.title : "..."} / 
                ${publication.author ? publication.author : "..."} /
                ${publication.visibility ? publication.visibility : "..."} /
                ${publication.section ? publication.section : "..."} /
            `}
          description={publication.content}
        />
      </List.Item>
    </>
  );
}
