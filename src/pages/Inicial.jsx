import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Layout from '../componentes/layout/Layout';
import { ThemeContext } from '../context/GlobalContext'
import Carregamento from '../componentes/all/Carregamento'
import StarIcon from '@material-ui/icons/Star';
import EmAlta from '../componentes/cartaz/EmAlta';
import Cartaz from '../componentes/cartaz/Cartaz';

const useStyles = makeStyles(theme => ({
  fontCustom: {
    fontWeight: 900,
    fontSize: '1.8em',
    marginBottom: '10px',
    letterSpacing: '0.1em',
  },
  fontSub: {
    fontWeight: 200,
    fontSize: '1.0em',
    marginBottom: '50px',
    letterSpacing: '0.08em',
    maxWidth: '600px',
  },
  buttonCustom: {
    padding: '5px 25px',
    fontSize: '1.0em',
  },
  master: {
    marginTop: theme.spacing(4),
  },
  boxCustom: {
    padding: '20px',
  },
  category: {
    color: '#CCCCCC',
  },
  rank: {
    alignItems: 'center',
    marginBottom: '5px',
  },
}))

export default function Inicial() {
  const classes = useStyles();

  const { loading } = React.useContext(ThemeContext)

  return (
    <Layout>
      { loading && <Carregamento open={loading} /> }
      <section className="cover">
        <Container>
          <Box className="cover-b">
            <Grid className={classes.rank} container spacing={2} >
              <Grid item>
                  <StarIcon style={{ color: '#B6B11F' }} />
              </Grid>
              <Grid item>
                  <Typography>
                    9,5
                  </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.category}>
                    Ação | Ficção Científica
                </Typography>
              </Grid>
            </Grid>
            <Typography className={classes.fontCustom}>RAMPAGE</Typography>
            <Typography className={classes.fontSub}>
              Davis Okoye é um primatologista, um homem recluso que compartilha um vínculo 
              inabalável com George, um gorila muito inteligente que está sob seus cuidados desde o nascimento.
            </Typography>
            <Button variant="contained" className={classes.buttonCustom} color="primary">COMPRAR INGRESSO</Button>
          </Box>
        </Container>
      </section>

      <section>
        <Container>
          <EmAlta />
          <Cartaz />
        </Container>
      </section>
    </Layout>
  )
}