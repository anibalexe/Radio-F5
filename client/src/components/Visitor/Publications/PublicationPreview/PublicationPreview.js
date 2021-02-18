import React, {useState, useEffect} from "react";
import { Space, Card } from "antd";
import NoImage from "../../../../assets/img/png/no-image.png";
import {
  getImageApi,
} from "../../../../api/publication";
import "./PublicationPreview.scss";

const { Meta } = Card;

export default function PublicationPreview(props) {
  const { publication } = props;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (publication.image) {
      getImageApi(publication.image).then((response) => {
        setImage(response);
      });
    } else {
      setImage(null);
    }
  }, [publication]);

  return (
    <>
        <Card
          hoverable
          className="card"
          cover={
            <img
              className="card__image"
              alt="example"
              src={image ? image : NoImage}
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
