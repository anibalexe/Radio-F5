import React, { useState, useEffect } from "react";
import { Button} from "antd";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersApi } from "../../../api/admin";
import List from "../../../components/Admin/List";

import "./Users.scss";

export default function Users() {
  const [ users, setUsers] = useState([]);
  const token = getAccessTokenApi();

  useEffect( () => {
    getUsersApi(token).then(response => {
      setUsers(response);
    });
  }, [token]);
  
  return (
    <>
      <Button className="button" type="primary" onClick={toUserAdd}>Agregar Usuario </Button>
      <List users={users}/>
    </>
  );
}


function toUserAdd(){
    window.location.href="/admin/users/user-add";
}