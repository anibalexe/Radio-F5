import React, { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Button } from "antd";
import { getPublicationsVisitorApi } from "../../../../api/publication";

import "./Publication.scss";

export default function Publications(props) {
  const { publication } = props;


  return(
    <>    
    <h1>{publication.title}</h1>

    <div dangerouslySetInnerHTML={{__html: publication.content}} />
    <h1>{publication.author}</h1>

    </>
  );

}
