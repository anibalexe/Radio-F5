import React, {useState, useEffect} from "react";
import { Space, Card } from "antd";
import NoImage from "../../../../assets/img/png/no-image.png";
import {
  getImageApi,
} from "../../../../api/publication";

//import "./PublicationPreviewPrincipal.scss";
const { Meta } = Card;

export default function PublicationPreviewPrincipal(props) {
  const { publicationPrincipal } = props;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (publicationPrincipal.image) {
      getImageApi(publicationPrincipal.image).then((response) => {
        setImage(response);
      });
    } else {
      setImage(null);
    }
  }, [publicationPrincipal]);

  return (
    <>
        <Card
          hoverable
          className="card"
          cover={
            <img
              className="card__image"
              alt="Portada"
              src={image ? image : NoImage}
            />
          }
        >
          <Meta
            title={publicationPrincipal.title}
            description={publicationPrincipal.subtitle}
          />
        </Card>
    </>
  );
}
