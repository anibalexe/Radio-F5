import React, { useEffect, useState} from "react";
import "./Sports.scss";
import News from "../../../components/Visitor/News";
import MostViewed from "../../../components/Visitor/MostViewed";
import ListSections from "../../../components/Visitor/Sections/ListSections";
import {getPublicationsSectionVisitorApi} from "../../../api/publication";

import { Row, Col, Card } from "antd";

export default function Sports() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    getPublicationsSectionVisitorApi(4).then((response) => {
      setPublications(response);
    });
  });

  console.log(publications);
  return (
    <>
      <Row>
        <Col className="left-news" flex={4}>
          <ListSections publications={publications}/>
        </Col>
        <Col flex={1}>
          <Card className="card">
            <h1>Patrocinadores</h1>
          </Card>
          <Card className="card">
            <h1>Anuncios</h1>
          </Card>
          <Card className="card">
          <h1>Relacionadas</h1>
            <MostViewed ClassName="mostviewed" />
          </Card>
          </Col>
      </Row>
      <Card className="patrocinadores">
        <h1>Patrocinadores</h1>
      </Card>
    </>
  );
}
