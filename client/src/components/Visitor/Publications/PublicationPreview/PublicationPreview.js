import React from "react";
import { Card, Space } from "antd";

import "./PublicationPreview.scss";

const { Meta } = Card;

export default function PublicationPreview(props) {
  const { publication } = props;

  return (
    <>
 
        <Card
          hoverable
          className="card"
          cover={
            <img
              className="card__image"
              alt="example"
              src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
            />
          }
        >
          <Meta
            title={publication.title}
            description={publication.author}
          />
        </Card>
 
    </>
  );
}
