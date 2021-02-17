import React, {useEffect, useState} from "react";
import { PROGRAM_ID } from "../../../../utils/constants";
import { List, Card, Image, Avatar } from "antd"
import { StarOutlined, LikeOutlined, MessageOutlined} from "@ant-design/icons";

import moment from "moment";
import "moment/locale/es";

import NoImage from "../../../../assets/img/png/no-image.png";

import {
  getImageApi,
} from "../../../../api/program";



import "./ProgramPreview.scss";

export default function ProgramPreview(props) {
  const { program } = props;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (program.image) {
      getImageApi(program.image).then((response) => {
        setImage(response);
      });
    } else {
      setImage(null);
    }
  }, [program]);

  console.log(image);

  return (
    <>
    <Card
    hoverable
    className="card-program"
    onClick={()=> {
      localStorage.setItem(PROGRAM_ID, program._id);
      window.location.href=`/programs/${program._id}`;
    }}>
     <List.Item
      key={program.title}
      actions={[
        moment(program.creationDate).calendar()+` por `+
        program.author
      ]}
      extra=
      {
        <img
          width={100}
          alt="logo"
          src={image ? image : NoImage}
        />
      }
      >
      <List.Item.Meta
        //image={<Avatar src={image ? image : NoImage} />}
        //image={program.image}//avatar={<Avatar src={program.avatar} />}
        title={program.title}//title={<a href={program.href}>{program.title}</a>}
        //description={program.description}
      />
      {program.subtitle}
      </List.Item>
      </Card>
    </>
  );
}

