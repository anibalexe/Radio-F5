import React, { useState, useEffect } from "react";
import ListMostViewed from "../../../components/Visitor/MostViewed/ListMostViewed";
import { Row, Col, Card, List } from "antd";
import PublicationsPreviewHome from "../../../components/Visitor/Publications/PublicationsPreviewHome";

import { getSecondaryPublicationsVisitorApi, getPrincipalPublicationVisitorApi, getMostViewedPublicationBySectionVisitorApi } from "../../../api/publication";

import "./Home.scss";

export default function Home() {
  const [publications, setPublications] = useState([]);
  const [lastNationalPublication, setLastNationalPublication] = useState([]);
  const [lastInternationalPublication, setLastInternationalPublication] = useState([]);
  const [lastSciencePublication, setLastSciencePublication] = useState([]);
  const [lastSportsPublication, setLastSportsPublication] = useState([]);
  const [publicationPrincipal, setPublicationPrincipal] = useState([]);

  useEffect(() => {
    getSecondaryPublicationsVisitorApi().then((response) => {
      setPublications(response.secondaryPublications);
    });
    getPrincipalPublicationVisitorApi().then((response)=>{
      setPublicationPrincipal(response.publication);
    });
  });

  useEffect(()=>{
    getMostViewedPublicationBySectionVisitorApi(1).then((response)=>{
      setLastNationalPublication(response);
    })
    getMostViewedPublicationBySectionVisitorApi(2).then((response)=>{
      setLastInternationalPublication(response);
    })
    getMostViewedPublicationBySectionVisitorApi(3).then((response)=>{
      setLastSciencePublication(response);
    })
    getMostViewedPublicationBySectionVisitorApi(4).then((response)=>{
      setLastSportsPublication(response);
    })
  })

  const lastPublications = [];
  if(lastNationalPublication){
    //if(lastNationalPublication.visibility==1){
      lastPublications.push(lastNationalPublication);
    //}
  }
  if(lastInternationalPublication){
    //if(lastInternationalPublication.visibility==1){
     lastPublications.push(lastInternationalPublication);
    //}
  }
  if(lastSciencePublication){
    //if(lastSciencePublication.visibility==1){
     lastPublications.push(lastSciencePublication)
    //}
  }
  if(lastSportsPublication){
    //if(lastSportsPublication.visibility==1){
      lastPublications.push(lastSportsPublication);
    //}
  }

/*console.log(lastPublications);
console.log(publicationPrincipal);*/

  return (
<>
      <Row className="row">
        <Col className="row__col-left" span={16}>
            <PublicationsPreviewHome publicationPrincipal={publicationPrincipal} publications={publications}/>
        </Col>

        <Col className="row__col-right" span={6}>
          <Card className="row__col-right__mostviewed" title="Noticias más vistas">
            <ListMostViewed lastPublications={lastPublications}/>
          </Card>
        </Col>
      </Row>
    </>
  );
}
