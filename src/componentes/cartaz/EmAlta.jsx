import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
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
              <img className="cartaz" src="https://i.imgur.com/ujBpD5x.png" />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=2" }}>
              <img className="cartaz" src="https://i.imgur.com/YIT3mve.png" />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=4" }}>
              <img className="cartaz" src="https://i.imgur.com/AKzSQb4.png" />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=3" }}>
              <img className="cartaz" src="https://i.imgur.com/zpWRHvy.png" />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=5" }}>
              <img className="cartaz" src="https://i.imgur.com/m5RDEC7.png" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default EmAlta
