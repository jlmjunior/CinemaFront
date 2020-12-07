import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Layout from '../componentes/layout/Layout';
import Icone from '../componentes/all/Icone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as Api from '../api/MovieApi'

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
    backgroundColor: '#212121',
    color: '#fff',
    padding: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
}))

const Filmes = (props) => {

  const queryString = require('query-string');
  const parametro = queryString.parse(props.location.search).value;

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

  const retornaDias = (sessoes) => {
    const horarios = sessoes.map((item, index) => (
      moment(item.Horario).format('MM/DD/YYYY')
    ))

    return horarios.filter((item, index, array) => array.indexOf(item) === index)
  }
  
  const retornaHorarios = (data) => {
    const horarios = movie.Sessoes.filter((item, index) => (
      moment(item.Horario).format('MM/DD/YYYY') === data
    ))

    return horarios
  }

  const retornaSalas = (data) => {
    let salas = [];

    movie.Sessoes.forEach((item, index) => {
      if (!salas.includes(item.IdSala))
        salas.push(item.IdSala)
    });

    return salas;
  }

  return (
    <Layout>
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
                  retornaDias(movie.Sessoes).map((item, index) => (
                    <Button color="secondary" key={index} onClick={() => setSessao(item)}>{moment(new Date(item)).format('DD/MM')}</Button>
                  ))
                )
              }
            </Box>

            <Box>
              {
                sessao ?
                (
                  retornaSalas(sessao).map((item, index) => (
                    <Button color="secondary" key={index}>{item}</Button>
                  ))
                ) :
                (
                  <Typography>Nenhuma sessão encontrada.</Typography>
                )
              }
            </Box>

            <Accordion className={classes.arcodeaoCustom}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.iconCustom} />}
                aria-controls="sessoes-dias"
                id="sessoes-dias-header"
              >
                <Typography className={classes.heading}>Selecionar salas e horários</Typography>
              </AccordionSummary>
              <AccordionDetails>

              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.arcodeaoCustom}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.iconCustom} />}
                aria-controls="sessoes-dias"
                id="sessoes-dias-header"
              >
                <Typography className={classes.heading}>Selecionar assento(s)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Container>
        </section>
      </>
      }
    </Layout>
  )
}

export default Filmes
