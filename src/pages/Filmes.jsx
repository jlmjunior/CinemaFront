import React from 'react'
import { Typography } from '@material-ui/core'

const Filmes = (props) => {

  const queryString = require('query-string');
  const parsed = queryString.parse(props.location.search);
  console.log(parsed.value);

  return (
    <div>
      <Typography variant="h1" color="initial">
        teste
      </Typography>
    </div>
  )
}

export default Filmes
