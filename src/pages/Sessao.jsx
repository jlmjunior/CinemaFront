import React from 'react'
import Layout from '../componentes/layout/Layout'
import Carregamento from '../componentes/all/Carregamento'
import * as Api from '../api/MovieApi'
import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Icone from '../componentes/all/Icone';
import { ThemeContext } from '../context/GlobalContext'

const useStyles = makeStyles(theme => ({
  fontCustom: {
    fontWeight: 900,
    fontSize: '1.8em',
    marginBottom: '10px',
    letterSpacing: '0.1em',
  },
  fontEdit: {
    fontWeight: 600,
    fontSize: '1.1em',
    marginLeft: '3px',
    letterSpacing: '0.1em',
    marginBottom: '20px',
  },
  fontSub: {
    fontWeight: 200,
    fontSize: '1.0em',
    marginBottom: '20px',
    letterSpacing: '0.08em',
  },
  fontAno: {
    fontWeight: 600,
    fontSize: '1.0em',
    marginBottom: '20px',
    letterSpacing: '0.08em',
  },
  fontGenero: {
    fontWeight: 500,
    fontSize: '1.0em',
    marginBottom: '20px',
    letterSpacing: '0.08em',
  },
  buttonCustom: {
    padding: '5px 25px',
    fontSize: '1.0em',
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
  },
  boxCustom: {
    padding: '20px',
  },
  category: {
    color: '#CCCCCC',
  },
  icon: {
    fontWeight: 200,
    fontSize: '1.0em',
    letterSpacing: '0.08em',
  },
  arcodeaoCustom: {
    backgroundColor: '#212121',
    color: '#fff',
    marginTop: '20px',
    marginBottom: '20px',
  },
  iconCustom: {
    color: '#fff',
  },
  back: {
    backgroundColor: '#101010',
    color: '#fff',
    padding: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
}))

const Sessao = (props) => {
  const classes = useStyles();
  
  const [assentos, setAssentos] = React.useState(null);
  const [movie, setMovie] = React.useState(null);

  const queryString = require('query-string');
  const parametroSessao = queryString.parse(props.location.search).idSessao;
  const parametroFilme = queryString.parse(props.location.search).idFilme;

  const { userConfig } = React.useContext(ThemeContext)

  const buscarAssentos = React.useCallback(async () => {
    const response = await Api.BuscarAssentos(parametroSessao);

    setAssentos(response.data);
  }, [parametroSessao]);

  React.useEffect(() => {
    if (parametroSessao) {
      buscarAssentos();
    }
  }, [parametroSessao, buscarAssentos]);

  const buscarFilme = React.useCallback(async () => {
    const response = await Api.GetMovie(parametroFilme);

    setMovie(response.data);
  }, [parametroFilme]);

  React.useEffect(() => {
    if (parametroFilme) {
      buscarFilme();
    }
  }, [parametroFilme, buscarFilme]);

  const tipoAssento = (item, index) => {
    if (item.Especial === 1 && item.Ocupado) {
      return <td key={index}><div className="assentoDB"></div></td>
    } else if (item.Especial === -1) {
      return <td key={index}><div className="assentoVazio"></div></td>
    } else if (item.Ocupado) {
      return <td key={index}><div className="assentoB"></div></td>
    } else if (item.Especial === 1) {
      return <td key={index}><div onClick={() => comprar(item.Id)} className="assentoD"></div></td>
    } else {
      return <td key={index}><div onClick={() => comprar(item.Id)} className="assentoA"></div></td>
    }
  }

  const comprar = async (assento) => {
    console.log(userConfig)
    const resp = await Api.ComprarIngresso(userConfig.userInfo.Usuario, parametroSessao, assento)

    console.log(resp);

    if (resp === 200) {

    }
  }

  return (
    <Layout>
      { <Carregamento open={assentos && movie ? false : true} /> }
      { movie &&
      <>
        <section className="coverMovie" style={{ backgroundImage:`url(${movie.LinkBackground})` }}>
          <Container>
            <Box className="coverMovie-b">
              <Grid container spacing={2} >
                <Grid item md={3} lg={3} xl={3}>
                  <img src={movie.LinkCapa} alt="" />
                </Grid>
                <Grid item md={9} lg={9} xl={9}>
                  <Typography className={classes.fontAno}>{movie.Ano}</Typography>
                  <Typography className={classes.fontCustom}>{movie.Titulo}</Typography>
                  <Grid container spacing={2}>
                    {
                      movie.Generos.map((item, index) => (
                        <Grid key={index} item>
                          <Typography className={classes.fontGenero} >
                            {item}
                          </Typography>
                        </Grid>
                      ))
                    }
                  </Grid>
                  <Typography className={classes.fontSub}>
                    {movie.Sinopse}
                  </Typography>
                  <Box marginBottom="20px" maxWidth="200px">
                    <Grid container spacing={5}>
                      <Grid item>
                        <Icone icon={<StarIcon color="primary"/>}>
                          <Typography className={classes.icon}>
                            {movie.Nota}
                          </Typography>
                        </Icone>
                      </Grid>
                      <Grid item>
                        <Icone icon={<AccessTimeIcon color="primary"/>}>
                          <Typography className={classes.icon}>
                            {movie.Duracao}
                          </Typography>
                        </Icone>
                      </Grid>
                    </Grid>
                  </Box>
                  <Button variant="contained" className={classes.buttonCustom} color="primary">ASSISTIR TRAILER</Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
        <section style={{ marginTop:"40px" }}>
          <Container>
            <hr />
            <table id="tabelaSessoes" style={{ margin: '20px auto' }}>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Typography color="secondary">J</Typography></td>
                  {
                    assentos &&
                    assentos.J.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
                <tr>
                  <td><Typography color="secondary">I</Typography></td>
                  {
                    assentos &&
                    assentos.I.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
                <tr>
                  <td><Typography color="secondary">H</Typography></td>
                  {
                    assentos &&
                    assentos.H.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
                <tr>
                  <td><Typography color="secondary">G</Typography></td>
                  {
                    assentos &&
                    assentos.G.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
                <tr>
                  <td><Typography color="secondary">F</Typography></td>
                  {
                    assentos &&
                    assentos.F.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
                <tr>
                  <td><Typography color="secondary">E</Typography></td>
                  {
                    assentos &&
                    assentos.E.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
                <tr>
                  <td><div className="assentoVazio"></div></td>
                </tr>
                <tr>
                  <td><Typography color="secondary">D</Typography></td>
                  {
                    assentos &&
                    assentos.D.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
                <tr>
                  <td><Typography color="secondary">C</Typography></td>
                  {
                    assentos &&
                    assentos.C.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
                <tr>
                  <td><Typography color="secondary">B</Typography></td>
                  {
                    assentos &&
                    assentos.B.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
                <tr>
                  <td><div className="assentoVazio"></div></td>
                </tr>
                <tr>
                  <td><Typography color="secondary">A</Typography></td>
                  {
                    assentos &&
                    assentos.A.map((item, index) => (
                      tipoAssento(item, index)
                    ))
                  }
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: 'center' }} className="tela">
              <Typography color="secondary" style={{ padding: '10px 0 10px 0' }}>TELA</Typography>
            </div>
          </Container>
                    
        </section>
      </>
      }
    </Layout>
  )
}

export default Sessao
