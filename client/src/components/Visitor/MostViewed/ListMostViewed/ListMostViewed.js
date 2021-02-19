import React from "react";
import {List} from "antd";
import MostViewPreview from "../MostViewedPreview";

export default function ListMostViewed(props){
    const { lastPublications } = props;

    return (
      <div>
        <Publications lastPublications={lastPublications} />
      </div>
    );
  }
  
  function Publications(props) {
    const { lastPublications } = props;
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={lastPublications}
        /*footer={
        }*/
        renderItem={(publication) => 
           <Publication publication={publication}/>
         }
      />
    );
  }
  
  function Publication(props) {
    const { publication } = props;
    return (
      <>
        <MostViewPreview publication={publication} />
      </>
    );
  }