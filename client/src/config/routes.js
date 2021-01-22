import AdminProfile from "../pages/Admin/Profile";
import AdminSignIn from "../pages/Admin"; 

import LayoutAdmin from "../layouts/LayoutAdmin";

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
                path: "/admin/",
                component: AdminSignIn,
                exact: true
            },
            {
                path: "/admin/profile/",
                component: AdminProfile,
                exact: true  
            }
        ]
    }
];

//Se exportan las rutas
export default routes; 