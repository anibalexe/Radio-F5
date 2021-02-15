import React, { useEffect, useState} from "react";
import "./National.scss";
import News from "../../../components/Visitor/News";
import MostViewed from "../../../components/Visitor/MostViewed";
import ListSections from "../../../components/Visitor/Sections/ListSections";
import {getPublicationsNationalVisitorApi} from "../../../api/publication";

import { Row, Col, Card } from "antd";

export default function National() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    getPublicationsNationalVisitorApi().then((response) => {
      setPublications(response);
    });
  });

  //console.log(publications);
  return (
    <>
      <Row>
        <Col flex={4}>
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
