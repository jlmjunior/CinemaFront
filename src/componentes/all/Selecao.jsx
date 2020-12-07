import React from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    marginRight: "20px",
    padding: "10px",
    '&:hover': {
      borderBottom: "2px solid #9A1D1D",
      cursor: "pointer",
   },
  },
  active: {
    borderBottom: "2px solid #9A1D1D",
  }
}));

const Selecao = (props) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.paper} ${(props.active && classes.active)}`} onClick={props.onClick}>
      <Box>
        <Typography style={{ color: "#959595" }}>{moment(new Date(props.data)).format('dddd')}</Typography>
      </Box>
      <Box>
        <Typography>{moment(new Date(props.data)).format('DD/MM')}</Typography>
      </Box>
    </Box>
  )
}

export default Selecao
