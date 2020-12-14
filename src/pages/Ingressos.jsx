import React from 'react'
import Layout from '../componentes/layout/Layout'
import * as Api from '../api/MovieApi'
import { ThemeContext } from '../context/GlobalContext'

const Ingressos = () => {
  const { userConfig } = React.useContext(ThemeContext)

  const [ingressos, setIngressos] = React.useState(null);

  const buscarSessao = React.useCallback(async (user) => {
    const response = await Api.MeuIngresso(user);

    console.log(response);

    setIngressos(response.data);
  }, []);

  React.useEffect(() => {
    if (userConfig)
      buscarSessao(userConfig.userInfo.Usuario)
  }, [userConfig, buscarSessao]);

  return (
    <div>
      <Layout>

      </Layout>
    </div>
  )
}

export default Ingressos
