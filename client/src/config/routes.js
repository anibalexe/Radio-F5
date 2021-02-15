//Componentes del Admiistrador
import AdminProfile from "../pages/Admin/Profile/";
import AdminSignIn from "../pages/Admin";
import AdminUserAdd from "../pages/Admin/UserAdd";
import AdminUsers from "../pages/Admin/Users";
import AdminPublications from "../pages/Admin/Publications";
import AdminPrograms from "../pages/Admin/Programs";
import AdminPublicities from "../pages/Admin/Publicities";
import AdminPublicationAdd from "../pages/Admin/PublicationAdd";

//Componentes del Visitante
import VisitorHome from "../pages/Visitor/Home";
import VisitorNational from "../pages/Visitor/National";
import VisitorNationalPublication from "../pages/Visitor/NationalPublication";
import VisitorInternational from "../pages/Visitor/International";
import VisitorSports from "../pages/Visitor/Sports";
import VisitorScience from "../pages/Visitor/Science";

import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

import {PUBLICATION_ID} from "../utils/constants";

/*
    Se utiliza un arreglo para definir cada una de las rutas. 
    El arreglo tiene a su vez otro arreglo que contiene subrutas.
*/
const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminProfile,
        exact: true,
      },
      {
        path: "/admin/profile",
        component: AdminProfile,
        exact: true,
      },
      {
        path: "/admin/publications",
        component: AdminPublications,
        exact: true,
      },
      {
        path: "/admin/publications/publication-add",
        component: AdminPublicationAdd,
        exact: true,
      },
      {
        path: "/admin/programs",
        component: AdminPrograms,
        exact: true,
      },
      {
        path: "/admin/users",
        component: AdminUsers,
        exact: true,
      },
      {
        path: "/admin/publicities",
        component: AdminPublicities,
        exact: true,
      },
      {
        path: "/admin/users/user-add",
        component: AdminUserAdd,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: VisitorHome,
        exact: true,
      },
      {
        path: "/home",
        component: VisitorHome,
        exact: true,
      },
      {
        path: "/national",
        component: VisitorNational,
        exact: true,
      },
      {
        path: `/national/${localStorage.getItem(PUBLICATION_ID)}`,
        component: VisitorNationalPublication,
        exact: false,
      },
      {
        path: "/international",
        component: VisitorInternational,
        exact: true,
      },
      {
        path: "/sports",
        component: VisitorSports,
        exact: true,
      },
      {
        path: "/science",
        component: VisitorScience,
        exact: true,
      },
    ],
  },
];

//Se exportan las rutas
export default routes;
