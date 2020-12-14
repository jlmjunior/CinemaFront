import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import Layout from '../componentes/layout/Layout'

const Sobre = () => {
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
      <section>
        <Container>
          <div style={{ textAlign: 'center' }}>
            <Typography color="secondary" style={{ letterSpacing: '0.1em', fontSize: '1.4em', fontWeight: '600'}}>
              TRABALHO DESENVOLVIMENTO PARA WEB
            </Typography>
            <Typography color="secondary" style={{ letterSpacing: '0.1em', marginTop: '20px' }}>
              UniRitter - Centro Universitário Ritter dos Reis
            </Typography>
            <Typography color="secondary" style={{ letterSpacing: '0.1em', marginTop: '20px' }}>
              Alunos: José Luis M. Junior, Jonas Antunes, Lucas Pacheco e Robson Farias.
            </Typography>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Sobre
