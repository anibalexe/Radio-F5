import React from "react";
import { Card } from "antd";


//import "./MostViewed.scss";

export default function MostViewed(){


    return(
    
        <>
        <div classname="most-viewed">
          <aside>
        <Card classname="most-viewed__card" title="Noticias mas vistas" extra={<a href="#">More</a>}>
          <p>Noticia 1</p>
          <p>Insertar foto</p>
        </Card>
        <Card classname="most-viewed__card" size="small" title="Noticia 2" extra={<a href="#">More</a>}>
          <p> Noticia 2</p>
          <p> Insertar foto</p>
        </Card>
          </aside>
        </div>
      </>



        
    )
} 