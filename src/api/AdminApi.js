import axios from 'axios';

const host = 'https://localhost:44307';

export const GetUsers = async (token) => {
  const link = `${host}/api/Admin/RetornarUsuarios?token=${token}`;
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

export const GetSessions = async (token) => {
  const link = `${host}/api/Admin/RetornarSessoes?token=${token}`;
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

export const DeleteUser = async (usuario, token) => {
  const link = `${host}/api/Admin/DeletarUsuario?usuario=${usuario}&token=${token}`;
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

export const DeleteSessao = async (id, token) => {
  const link = `${host}/api/Admin/DeletarSessao?id=${id}&token=${token}`;
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

export const CadastrarSessao = async (filme, sala, inicio, fim, token) => {
  const link = `${host}/api/Admin/CadastrarSessao?token=${token}`;

  const data = {
    IdFilme: filme,
    IdSala: sala,
    DataInicio: inicio,
    DataFim: fim
  }

  try {
    await axios.post(link, data, {

      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function (response) {
      //
    });
    
  } 
  catch (ex) {
    return ex.response.status;
  }

  return 200;
}

export const BuscarFilmes = async () => {
  const link = `${host}/api/Admin/RetornarFilmes`;
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

export const BuscarSalas = async () => {
  const link = `${host}/api/Admin/RetornarSalas`;
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