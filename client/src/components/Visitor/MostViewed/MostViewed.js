import React from "react";
import { Card } from "antd";
import News from "../News";
import "../../Visitor/News/"

//import "./MostViewed.scss";

export default function MostViewed(){


    return(
    
        <>
        <div classname="most-viewed">
          <aside>
        <Card classname="most-viewed__card" title="Noticias mas vistas" extra={<a href="#">More</a>}>
         <p><News/></p>
         <p><News/></p>
         <p><News/></p> 
        </Card>
          </aside>
        </div>
      </>



        
    )
} 