import React from "react";
import { Card } from "antd";

import "./PublicationsPreviewHome.scss";

import PublicationPreview from "../PublicationPreview";
import PublicationPreviewPrincipal from "../PublicationPreviewPrincipal";
import Publications from "../../../../pages/Admin/Publications/Publications";

export default function PublicationsPreviewHome(props) {
    const { publications } = props;
    return (
        <div>
            <PublicationPreviewPrincipal publications={publications}/>
            <PublicationPreview publications={publications}/>
        </div>
    )
}