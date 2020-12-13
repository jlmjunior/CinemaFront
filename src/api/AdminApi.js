import axios from 'axios';

export const GetUsers = async () => {
  const link = 'https://localhost:44307/api/Admin/RetornarUsuarios';
  let resp;

  try {
    await axios.get(link, null, {

      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function (response) {
      resp = response;
    });
    
  } 
  catch (ex) {
    resp = ex.response;
  }

  return resp;
}

export const GetSessions = async () => {
  const link = 'https://localhost:44307/api/Admin/RetornarSessoes';
  let resp;

  try {
    await axios.get(link, null, {

      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function (response) {
      resp = response;
    });
    
  } 
  catch (ex) {
    resp = ex.response;
  }

  return resp;
}

export const DeleteUser = async (usuario) => {
  const link = `https://localhost:44307/api/Admin/DeletarUsuario?usuario=${usuario}`;
  let resp;

  try {
    await axios.delete(link, null, {

      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function (response) {
      resp = response;
    });
    
  } 
  catch (ex) {
    resp = ex.response;
  }

  return resp;
}

export const DeleteSessao = async (id) => {
  const link = `https://localhost:44307/api/Admin/DeletarSessao?id=${id}`;
  let resp;

  try {
    await axios.delete(link, null, {

      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function (response) {
      resp = response;
    });
    
  } 
  catch (ex) {
    resp = ex.response;
  }

  return resp;
}