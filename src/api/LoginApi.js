import axios from 'axios';

export const Auth = async (username, password) => {
  const link = 'https://localhost:44307/api/auth/login';

  const data = {
    Usuario: username,
    Senha: password
  }

  try {
    await axios.post(link, data, {

      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function (response) {
      localStorage.setItem('userconfig', JSON.stringify(response.data))
    });
    
  } 
  catch (ex) {
    return ex.response.status;
  }

  return 200;

}

export const Register = async (user) => {
  const link = 'https://localhost:44307/api/auth/cadastrar';

  const data = {
      Usuario: user.username,
      Senha: user.password,
      ConfirmarSenha: user.confirmPassword
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