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