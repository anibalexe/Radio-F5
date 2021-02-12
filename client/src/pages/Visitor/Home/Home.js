import React, { useState, useEffect } from "react";
import MostViewed from "../../../components/Visitor/MostViewed";
import { Row, Col, Card, List } from "antd";
import PublicationsPreviewHome from "../../../components/Visitor/Publications/PublicationsPreviewHome";

import { getPublicationsVisitorApi } from "../../../api/publication";

//import "./Home.scss";

export default function Home() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    getPublicationsVisitorApi().then((response) => {
      setPublications(response.publications);
    });
  });



  return (
<>
      <Row>
        <Col className="home__col-left" span={16}>
          <Card className="home__card">
            <PublicationsPreviewHome publications={publications} />
          </Card>
        </Col>

        <Col className="home__col-right" span={6}>
          <Card className="home__card" title="Noticias más vistas">
            <MostViewed className="home__mostviewed" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
