import { Box, Container, Grid, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react'
import Layout from '../componentes/layout/Layout'
import * as Api from '../api/MovieApi'
import Carregamento from '../componentes/all/Carregamento'

const Confirmacao = (props) => {
  const queryString = require('query-string');
  const filme = queryString.parse(props.location.search).filme;
  const coluna = queryString.parse(props.location.search).coluna;
  const linha = queryString.parse(props.location.search).linha;
  const parametroSessao = queryString.parse(props.location.search).sessao;

  const [sessao, setSessao] = React.useState(null);

  const buscarSessao = React.useCallback(async () => {
    const response = await Api.BuscarSessao(parametroSessao);

    setSessao(response.data);
  }, [parametroSessao]);

  React.useEffect(() => {
    if (parametroSessao) {
      buscarSessao();
    }
  }, [parametroSessao, buscarSessao]);

  return (
    <Layout>
      <section className="coverMovie" style={{ backgroundImage:`url(https://i.imgur.com/Gk6ZRdu.jpg)` }}>
        <Container>
          <Box className="coverMovie-b">
            <div style={{ height: '200px' }}>

            </div>
          </Box>
        </Container>
      </section>
      <Container>
        <Alert variant="filled" severity="success">
          Compra efetuada com sucesso!
        </Alert>
      </Container>
      <section>
        { <Carregamento open={(sessao && linha && coluna && filme) ? false : true} /> }
        {
          (sessao && linha && coluna && filme) &&
          <Container>
            <div style={{ marginTop: '40px', marginBottom: '40px' }}>
              <Box 
              style={{ 
                padding: '20px', 
                backgroundColor: '#101010', 
                marginTop: '20px', 
                boxShadow: '1px 1px 8px #171717', 
                borderLeft: '2px solid #198C10' 
                }} 
                >
                <Typography style={{ marginBottom: '30px', letterSpacing: '0.1em' }} color="secondary">Filme: {filme}</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Typography style={{ letterSpacing: '0.1em' }} color="secondary">Sala {sessao.IdSala}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography style={{ letterSpacing: '0.1em' }} color="secondary">Assento: {linha} - {coluna} </Typography>
                  </Grid>
                </Grid>
                <Typography style={{ marginTop: '10px', letterSpacing: '0.1em' }} color="secondary">Horário: {sessao.Horario}</Typography>
              </Box>
            </div>
          </Container>
        }
      </section>
    </Layout>
  )
}

export default Confirmacao
