import React from 'react'
import Layout from '../componentes/layout/Layout'
import * as Api from '../api/MovieApi'
import Carregamento from '../componentes/all/Carregamento'
import { ThemeContext } from '../context/GlobalContext'
import { Box, Container, Grid, Typography } from '@material-ui/core'

const Ingressos = () => {
  const { userConfig } = React.useContext(ThemeContext)

  const [ingressos, setIngressos] = React.useState(null);

  const buscarSessao = React.useCallback(async (user) => {
    const response = await Api.MeuIngresso(user);

    console.log(response.data);

    setIngressos(response.data);
  }, []);

  React.useEffect(() => {
    if (userConfig)
      buscarSessao(userConfig.userInfo.Usuario)
  }, [userConfig, buscarSessao]);

  return (
    <Layout>
      { <Carregamento open={ingressos ? false : true} /> }

      <section className="coverMovie" style={{ backgroundImage:`url(https://i.imgur.com/Gk6ZRdu.jpg)` }}>
        <Container>
          <Box className="coverMovie-b">
            <div style={{ height: '200px' }}>

            </div>
          </Box>
        </Container>
      </section>
      <section>
        <Container>
          <Typography 
            style={{ 
            letterSpacing: '0.1em', 
            fontSize: '1.2em', 
            fontWeight: '600' 
            }} 
            color="secondary">
              MEUS INGRESSOS
            </Typography>
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            {
              ingressos&&
              ingressos.map((item, index) => (
                <Box 
                style={{ 
                  padding: '20px', 
                  backgroundColor: '#101010', 
                  marginTop: '20px', 
                  boxShadow: '1px 1px 8px #171717', 
                  borderLeft: '2px solid #720108' 
                  }} 
                  key={index}>
                  <Typography style={{ marginBottom: '30px', letterSpacing: '0.1em' }} color="secondary">Filme: {item.Titulo}</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Typography style={{ letterSpacing: '0.1em' }} color="secondary">Sala: {item.IdSala}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography style={{ letterSpacing: '0.1em' }} color="secondary">Assento: {item.Linha} {item.Coluna}</Typography>
                    </Grid>
                  </Grid>
                  <Typography style={{ marginTop: '10px', letterSpacing: '0.1em' }} color="secondary">Horário: {item.DtInicio}</Typography>
                </Box>
              ))
            }
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Ingressos
