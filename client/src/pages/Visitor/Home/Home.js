import React from "react";
import "./Home.scss";
import MostViewed from "../../../components/Visitor/MostViewed";
import News from "../../../components/Visitor/News";
import { Row, Col } from "antd";

export default function Home() {
  return (
    <div className="home">
      <h1>Inicio de la pagina</h1>
      <Row className="fila">
        <Col className="columna-izq" flex={4}>
          <div className="home__col">
            <News className="home__news" />
          </div>
        </Col>
        <Col className="columna-der" flex={1}>
          <MostViewed className="home__mostviewed" />
        </Col>
      </Row>
    </div>
  );
}
