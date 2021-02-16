import React from "react";
import { PUBLICATION_ID } from "../../../../utils/constants";
import { List, Card } from "antd"
import { StarOutlined, LikeOutlined, MessageOutlined} from "@ant-design/icons";

import moment from "moment";
import "moment/locale/es";

export default function PublicationPreview(props) {
  const { publication } = props;
  return (
    <>
    <Card 
    hoverable
    onClick={()=> {
      localStorage.setItem(PUBLICATION_ID, publication._id);
      publication.section==1?window.location.href=`/national/${publication._id}`:
      publication.section==2?window.location.href=`/international/${publication._id}`:
      publication.section==3?window.location.href=`/science/${publication._id}`:
      publication.section==4?window.location.href=`/sports/${publication._id}`:window.location.reload()
    }}>
     <List.Item
      key={publication.title}
      actions={[
        moment(publication.creationDate).calendar()+` por `+
        publication.author
      ]}
      extra=
      {
        <img
          width={272}
          alt="logo"
          src={"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}
        />
      }
      >
      <List.Item.Meta
        image={publication.image}//avatar={<Avatar src={publication.avatar} />}
        title={publication.title}//title={<a href={publication.href}>{publication.title}</a>}
        //description={publication.description}
      />
      {publication.subtitle}
      </List.Item>
      </Card>
    </>
  );
}

