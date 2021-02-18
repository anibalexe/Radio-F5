import React, { useState, useEffect } from "react";
import ListMostViewed from "../../../components/Visitor/MostViewed/ListMostViewed";
import { Row, Col, Card, List } from "antd";
import PublicationsPreviewHome from "../../../components/Visitor/Publications/PublicationsPreviewHome";

import { getSecondaryPublicationsVisitorApi, getPrincipalPublicationVisitorApi } from "../../../api/publication";

//import "./Home.scss";

export default function Home() {
  const [publications, setPublications] = useState([]);
  const [publicationPrincipal, setPublicationPrincipal] = useState([]);

  useEffect(() => {
    getSecondaryPublicationsVisitorApi().then((response) => {
      setPublications(response.secondaryPublications);
    });
    getPrincipalPublicationVisitorApi().then((response)=>{
      setPublicationPrincipal(response.publication);
    });
  });

  return (
<>
      <Row>
        <Col className="home__col-left" span={16}>
          <Card className="home__card">
            <PublicationsPreviewHome publicationPrincipal={publicationPrincipal} publications={publications}/>
          </Card>
        </Col>

        <Col className="home__col-right" span={6}>
          <Card className="home__card" title="Noticias más vistas">
            <ListMostViewed className="home__mostviewed" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
