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


const Cartaz = () => {
  const classes = useStles();

  return (
    <>
      <Box>
        <Typography className={classes.fontCustom}>EM CARTAZ</Typography>
      </Box>
      <Grid className={classes.custom} container spacing={0}>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=6" }}>
              <img className="cartaz" src="https://i.imgur.com/saB2aLV.png" />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=7" }}>
              <img className="cartaz" src="https://i.imgur.com/u9MF9sj.png" />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=8" }}>
              <img className="cartaz" src="https://i.imgur.com/usuESsX.png" />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=9" }}>
              <img className="cartaz" src="https://i.imgur.com/XzhiO8w.png" />
            </Link>
          </Box>
        </Grid>
        <Grid item xl={2}>
          <Box className="cartaz-main">
            <Link to={{ pathname: "/filmes", search: "?value=10" }}>
              <img className="cartaz" src="https://i.imgur.com/r9KQwQl.png" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Cartaz
