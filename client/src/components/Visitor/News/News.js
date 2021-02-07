import React from "react";
import { Card } from "antd";




export default function News(){
    const { Meta } = Card;

    return(
    <>
    <Card className="News"
    hoverable
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Prueba de noticia 1" description="www.instagram.com" />
    </Card>
    </>
    )
}