import React from "react";
import ProgramPreview from "../ProgramPreview";
import { Menu, Button, List, Space, Card, Divider, notification } from "antd";

import "./ListSections.scss";

export default function ListSections(props) {
  const { programs } = props;
  return (
    <div>
      <Programs programs={programs} />
    </div>
  );
}

function Programs(props) {
  const { programs } = props;
  return (
    <List
      itemLayout="vertical"
      size="large"
      grid={{ gutter: 16, column: 4 }}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 4,
      }}
      dataSource={programs}
      /*footer={
      }*/
      renderItem={(program) => 
          <Program program={program}/>
       }
    />
  );
}

function Program(props) {
  const { program } = props;
  return (
    <>
      {program.visibility==1?<ProgramPreview program={program} />: <></>}
    </>
  );
}
