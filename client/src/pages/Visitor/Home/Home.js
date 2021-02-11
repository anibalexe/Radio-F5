import React, {useState, useEffect} from "react";
import "./Home.scss";
import MostViewed from "../../../components/Visitor/MostViewed";
import News from "../../../components/Visitor/News";
import { Row, Col, Card } from "antd";
import { getPublicationsApi } from "../../../api/publication";

export default function Home() {
  const [ publications, setPublications] = useState([]);
  const [ reloadPublications, setReloadPublications ] = useState(false);
  const token = getAccessTokenApi();

  useEffect( () => {
    getPublicationsApi(token).then(response => {
      setPublications(response.publications);
    });
    setReloadPublications(false);
  }, [token, reloadPublications]);

  return (
    <div className="home">
      <h1>Inicio de la pagina</h1>
      <Row>
        <Col className="home__col-left" flex={4}>
          <Card className="home__card">
            <News className="home__news" />
          </Card>
        </Col>

        <Col className="home__col-right" flex={1}>
          <Card className="home__card" title="Noticias más vistas">
            <MostViewed className="home__mostviewed" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
