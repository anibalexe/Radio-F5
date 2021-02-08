import React from "react";
import { Card } from "antd";
import News from "../News";
import "../../Visitor/News/";

import "./MostViewed.scss";

export default function MostViewed() {
  return (
    <>
      <div className="most-viewed">
        <ul className="most-viewed__ul">
          <li>
            <News />
          </li>
          <li>
            <News />
          </li>
          <li>
            <News />
          </li>
        </ul>
      </div>
    </>
  );
}
