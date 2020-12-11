import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(theme => ({
  barraLateral: {
    padding: '20px',
  },
  title: {
    fontSize: '1.2em',
    fontWeight: '600',
    letterSpacing: '0.1em',
    color: '#fff',
    textTransform: 'uppercase',
  }
}));

const BarraLateral = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.barraLateral}>
      <Typography className={classes.title}>{props.title}</Typography>
      {props.children}
    </Box>
  )
}

export default BarraLateral
