import React, {useState, useEffect} from "react";
import "./Home.scss";
import MostViewed from "../../../components/Visitor/MostViewed";
import { Row, Col, Card } from "antd";
import { getPublicationsVisitorApi } from "../../../api/publication";
import PublicationsPreviewHome from "../../../components/Visitor/Publications/PublicationsPreviewHome";


export default function Home() {
  const [ publications, setPublications] = useState([]);

  useEffect( () => {
    getPublicationsVisitorApi().then(response => {
      setPublications(response.publications);
    });
  });

  console.log(publications);

  return (
    <div className="home">
      <Row>
        <Col className="home__col-left" flex={4}>
          <Card className="home__card">
            <PublicationsPreviewHome publications={publications}/>
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
