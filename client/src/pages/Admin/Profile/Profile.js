import { userInfo } from "os";
import React from "react";
import useAuth from "../../../hooks/useAuth";

const {user}=useAuth;

export default function Profile() {
  console.log(user);
  return (
    <div>
      <h1>Bienvenido al perfil de Administrador</h1>
    </div>
  );
}
