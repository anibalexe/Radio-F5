import React from "react";
import { Layout } from "antd";
//Se importa 'LayoutAdmin.scss' que contiene las diversas
//configuraciones de diseño del Layout de Admin.
import "./LayoutBasic.scss";
//Se importa el modulo 'react-router-dom' que permite trabajar con las 
//rutas en React.
import { Route } from "react-router-dom";

export default function LayoutBasic(props) {
  //Aplica destruturing a props para obtener las rutas.
  const { routes } = props;
  //Aplica destructuring a Layout para obtener Header, content y Footer.
  const { Content } = Layout;
  return (
    //Establece la estructura del Layout.
    <Layout>
        <Content>
          <LoadRouters routes={routes} />
        </Content>
    </Layout>
  );
}

//Observación: Aplica destructuring directamente a un objeto que pasa por parametro.
/*
    La función LoadRouters() genera una ciclo y retorna todas las rutas encontradas 
    en una colección de tipo mapa.
*/
function LoadRouters({ routes }) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
