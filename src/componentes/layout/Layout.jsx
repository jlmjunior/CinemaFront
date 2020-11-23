import React from 'react'
import { Navbar } from '../nav/Navbar'
import Gaveta from '../nav/Gaveta'
import { makeStyles } from '@material-ui/core'

const estilos = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}))

const Layout = ({children}) => {

  const classes = estilos()
  const [abrir, setAbrir] = React.useState(false)

  const acaoAbrir = () => {
    setAbrir(!abrir)
  }

  return ( 
    <div className={classes.root}>        
        <div className={classes.content}>
          <Navbar acaoAbrir={acaoAbrir} />

          <Gaveta 
            variant="temporary" 
            open={abrir} 
            onClose={acaoAbrir}
          />
          
          {children}
        </div>
      
    </div>
  )
}

export default Layout