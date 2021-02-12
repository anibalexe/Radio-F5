import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default function PublicationPreview(props) {
  const { publications } = props;

  return (
    <>
      <Card
        hoverable
        style={{ width: 140 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      ,
    </>
  );
}
