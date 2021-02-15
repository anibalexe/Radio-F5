import { basePath, apiVersion } from "./config";

export function publicationAddApi(token, data){
    const url = `${basePath}/${apiVersion}/publicationAdd`;
    const params = {
      method: "POST",
      body: JSON.stringify(data),
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

  export function getPublicationsApi(token){
    const url = `${basePath}/${apiVersion}/getPublications`;
    
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

  export function getPublicationsVisitorApi(){
    const url = `${basePath}/${apiVersion}/getPublicationsVisitor`;
    
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

  export function getPublicationVisitorApi(publicationId){
    const url = `${basePath}/${apiVersion}/getPublicationVisitor/${publicationId}`;
    
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

  export function getPublicationsNationalVisitorApi(){
    const url = `${basePath}/${apiVersion}/getPublicationsVisitor`;
    
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };
    
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return getPublicationBySection(result, 1);
      })
      .catch(err => {
        return err.message;
      });
  }

  export function getPublicationsInternationalVisitorApi(){
    const url = `${basePath}/${apiVersion}/getPublicationsVisitor`;
    
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };
    
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return getPublicationBySection(result, 2);
      })
      .catch(err => {
        return err.message;
      });
  }

  export function deletePublicationApi(token, publicationId) {
    const url = `${basePath}/${apiVersion}/deletePublication/${publicationId}`;
  
    const params = {
      method: "DELETE",
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
        return result.message;
      })
      .catch(err => {
        return err.message;
      });
  }

  export function updatePublicationApi(token, publication, publicationId){
    const url = `${basePath}/${apiVersion}/updatePublication/${publicationId}`;
    
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(publication)
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

  function getPublicationBySection(result, section){
    const result2 = result.publications.filter(publications => publications.section==section);
    return result2;
  }
  
