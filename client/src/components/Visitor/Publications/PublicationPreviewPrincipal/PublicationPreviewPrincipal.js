import React from "react";
import { Space, Card } from "antd";

//import "./PublicationPreviewPrincipal.scss";
const { Meta } = Card;

export default function PublicationPreviewPrincipal(props) {
  const { publications } = props;

  const size = publications.length;
  /*console.log(publications);
  console.log(publications[size-1]);*/

  return (
    <>
        <Card
          hoverable
          className="card"
          cover={
            <img
              className="card__image"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta
            title={publications[size-1].title}
            description={publications[size-1].author}
          />
        </Card>
    </>
  );
}
