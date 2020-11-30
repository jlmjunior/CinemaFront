import { Grid } from '@material-ui/core'
import React from 'react'

const Icone = (props) => {
  return (
    <Grid container direction="row" alignItems="center" spacing={1}>
      <Grid item>
        {props.icon}
      </Grid>
      <Grid item>
        {props.children}
      </Grid>
    </Grid>
  )
}

export default Icone
