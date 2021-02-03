import { basePath, apiVersion } from "./config";

export function signInApi(data) {
  const url = `${basePath}/${apiVersion}/signIn`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      //console.log(result);

      return result;
    })
    .catch(err => {
      return err.message;
    });
}

export function userAddApi(data){
  const url = `${basePath}/${apiVersion}/userAdd`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      //console.log(result);

      return result;
    })
    .catch(err => {
      return err.message;
    });
} 

export function getUsersApi(token){
  const url = `${basePath}/${apiVersion}/getUsers`;
  
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };


  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}

export function updateAdminApi(token, admin, adminId){
  const url = `${basePath}/${apiVersion}/updateAdmin/${adminId}`;
  
  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(admin)
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}


