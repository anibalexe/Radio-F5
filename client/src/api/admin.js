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
      console.log(result);

      return result;
    })
    .catch(err => {
      return err.message;
    });
}
