import React from 'react'
import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Layout from '../componentes/layout/Layout';
import Carregamento from '../componentes/all/Carregamento'
import Icone from '../componentes/all/Icone';
import * as Api from '../api/MovieApi'
import Selecao from '../componentes/all/Selecao';
import { useHistory } from "react-router-dom";

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

const Filmes = (props) => {

  const queryString = require('query-string');
  const parametro = queryString.parse(props.location.search).value;
  const history = useHistory();
  const classes = useStyles();

  const [movie, setMovie] = React.useState(null);
  const [sessao, setSessao] = React.useState(null);

  const buscarFilme = React.useCallback(async () => {
    const response = await Api.GetMovie(parametro);

    setMovie(response.data);
  }, [parametro]);

  React.useEffect(() => {
    if (parametro) {
      buscarFilme();
    }
  }, [parametro, buscarFilme]);

  React.useEffect(() => {
    if (movie)
      if (movie.Sessoes)
        setSessao(moment(movie.Sessoes[0].Horario).format('MM/DD/YYYY'));
  }, [movie]);

  const retornaDias = (sessoes) => {
    const horarios = sessoes.map((item, index) => (
      moment(item.Horario).format('MM/DD/YYYY')
    ))

    return horarios.filter((item, index, array) => array.indexOf(item) === index)
  }
  
  const retornaHorarios = (sala, data) => {
    let horarios = [];

    movie.Sessoes.forEach((item, index) => {
      const dataItem = moment(item.Horario).format('MM/DD/YYYY');

      if (item.IdSala === sala && data === dataItem) 
        horarios.push(item.Horario);

    });

    return horarios
  }

  const retornaSalas = (data) => {
    let salas = [];

    movie.Sessoes.forEach((item, index) => {
      const dataItem = moment(item.Horario).format('MM/DD/YYYY');

      if (!salas.includes(item.IdSala) && data === dataItem)
        salas.push(item.IdSala)
    });

    return salas;
  }

  const assentos = (hora) => {
    if (localStorage.getItem('userconfig')) {
      movie.Sessoes.forEach((item, index) => {
        if(item.Horario === hora) {
          history.push(`/sessao?idSessao=${item.Id}&idFilme=${parametro}`);
        }
      })
    } else {
      history.push(`/`);
    }
  }

  return (
    <Layout>
      { <Carregamento open={movie ? false : true} /> }

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
            <Box className={classes.back}>
              {
                movie.Sessoes == null ?
                (
                  <Typography>Nenhuma sessão encontrada.</Typography>
                ) :
                (
                  <Box display="flex" flexDirection="row">
                    {
                      retornaDias(movie.Sessoes).map((item, index) => (
                        <Selecao 
                        data={item} 
                        active={item === sessao}
                        key={index} 
                        onClick={() => setSessao(item)}/>
                      ))
                    }
                  </Box>
                )
              }
            </Box>

            <Box>
              {
                sessao ?
                (
                  retornaSalas(sessao).map((sala, indexSala) => (
                    <Box className={classes.back} key={indexSala}>
                      <Typography className={classes.fontEdit}>Sala {sala}</Typography>
                      {
                        retornaHorarios(sala, sessao).map((hora, indexHora) => (
                          <Button 
                          style={{ marginRight: "10px", padding: "10px 30px" }}
                          variant="outlined" 
                          color="secondary"
                          onClick={() => assentos(hora)}
                          key={indexHora}>{moment(new Date(hora)).format('HH:mm')}
                          </Button>
                        ))
                      }
                    </Box>
                  ))
                ) :
                (
                  <Typography>Nenhuma sessão encontrada.</Typography>
                )
              }
            </Box>
          </Container>
        </section>
      </>
      }
    </Layout>
  )
}

export default Filmes
