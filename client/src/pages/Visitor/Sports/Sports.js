import React from "react";
import "./Sports.scss";
import News from "../../../components/Visitor/News";
import MostViewed from "../../../components/Visitor/MostViewed";
import { Row, Col, Card } from "antd";

export default function Sports() {
  return (
    <>
      <Row>
        <Col flex={4}>
          <Card className="card">
            <Row>
              <Col flex={2}>
                <h1>Foto</h1>
              </Col>
              <Col flex={3}>
                <h1>La empresa </h1>
              </Col>
            </Row>
          </Card>
          <Card className="card">
            <Row>
              <Col flex={2}>
                <h1>Foto 2</h1>
              </Col>
              <Col flex={3}>
                <h1>Parrafo 2</h1>
              </Col>
            </Row>
          </Card>
          <Card className="card">
            <Row>
              <Col flex={2}>
                <h1>Foto 3</h1>
              </Col>
              <Col flex={3}>
                <h1>Parrafo 3</h1>
              </Col>
            </Row>
          </Card>
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

