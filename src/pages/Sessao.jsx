import React from 'react'
import Layout from '../componentes/layout/Layout'
import Carregamento from '../componentes/all/Carregamento'
import * as Api from '../api/MovieApi'

const Sessao = (props) => {
  const [assentos, setAssentos] = React.useState(null);

  const queryString = require('query-string');
  const parametro = queryString.parse(props.location.search).idSessao;

  const buscarFilme = React.useCallback(async () => {
    const response = await Api.BuscarAssentos(parametro);

    console.log(response.data);
    setAssentos(response.data);
  }, [parametro]);

  React.useEffect(() => {
    if (parametro) {
      buscarFilme();
    }
  }, [parametro, buscarFilme]);

  return (
    <div>
      { <Carregamento open={assentos ? false : true} /> }

      <Layout>

      </Layout>
    </div>
  )
}

export default Sessao
