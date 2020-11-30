import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import ArranhaCeu from '../../img/arranha-ceu.png';
import Captain from '../../img/captain-marvel.png';
import Coringa from '../../img/coringa.png';
import Scooby from '../../img/scooby.png';
import Terminator from '../../img/terminator.png';
import '../../styles/global.css'
import { Link } from 'react-router-dom';

const useStles = makeStyles(theme => ({
  custom: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '40px',
    marginBottom: '40px',
  },
  fontCustom: {
    fontWeight: 900,
    fontSize: '1.8em',
    marginBottom: '10px',
    letterSpacing: '0.1em',
    color: '#fff',
  },
}))

const EmAlta = () => {
  const classes = useStles();

  return (
    <>
      <Box>
        <Typography className={classes.fontCustom}>EM ALTA</Typography>
      </Box>
      <Grid className={classes.custom} container spacing={0}>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=1" }}>
              <img className="cartaz" src={ArranhaCeu} />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=2" }}>
              <img className="cartaz" src={Captain} />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <img className="cartaz" src={Coringa} />
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <img className="cartaz" src={Terminator} />
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <img className="cartaz" src={Scooby} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default EmAlta
