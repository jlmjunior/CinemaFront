import React from 'react'
import { makeStyles, Drawer, Divider } from '@material-ui/core'
import Listas from './Listas'

const drawerWidth = 240

const estilos = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}))

const Gaveta = (props) => {

  const classes = estilos()

  return (
    <Drawer 
      className={classes.drawer} 
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar}></div>
      <Divider />

      <Listas />

    </Drawer>
  )
}

export default Gaveta