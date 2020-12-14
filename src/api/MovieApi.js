import axios from 'axios';

export const GetMovie = async (value) => {
  const link = `https://localhost:44307/api/Movies/BuscarFilme?value=${value}`;
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

export const BuscarAssentos = async (value) => {
  const link = `https://localhost:44307/api/Movies/BuscarAssentos?idSessao=${value}`;
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

export const ComprarIngresso = async (usuario, sessao, assento) => {
  const link = 'https://localhost:44307/api/Movies/ComprarIngresso';

  const data = {
    Usuario: usuario,
    IdAssento: assento,
    IdSessao: sessao
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

export const MeuIngresso = async (usuario) => {
  const link = 'https://localhost:44307/api/Movies/MeuIngresso';
  let resp;

  const data = {
    Usuario: usuario
  }

  try {
    await axios.post(link, data, {

      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function (response) {
      resp = response
    });
    
  } 
  catch (ex) {
    return ex.response.status;
  }

  return resp;
}

export const BuscarSessao = async (value) => {
  const link = `https://localhost:44307/api/Movies/BuscarSessao?id=${value}`;
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