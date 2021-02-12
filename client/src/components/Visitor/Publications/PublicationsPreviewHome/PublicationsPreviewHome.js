import React from "react";
import { Card, List } from "antd";

import "./PublicationsPreviewHome.scss";

import PublicationPreview from "../PublicationPreview";
import PublicationPreviewPrincipal from "../PublicationPreviewPrincipal";
import Publications from "../../../../pages/Admin/Publications/Publications";

export default function PublicationsPreviewHome(props) {
  const { publications } = props;

  return (
    <div>
      <List
        grid={{ gutter: 8, column: 1 }}
        dataSource={publications}
        renderItem={(publication) => (
          <List.Item>
            <PublicationPreviewPrincipal publication={publication} publications={publications} />
          </List.Item>
        )}
      />
        <List
        grid={{ gutter: 8, column: 2 }}
        dataSource={publications}
        renderItem={(publication) => (
          <List.Item>
            <PublicationPreview publication={publication} />
          </List.Item>
        )}
      />
    </div>
  );
}
