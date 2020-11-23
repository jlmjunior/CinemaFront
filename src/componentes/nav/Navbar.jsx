import React from 'react'
import { ThemeContext } from '../../context/GlobalContext'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button, Hidden, ThemeProvider, createMuiTheme } from '@material-ui/core'
import Modal from '../login/Modal'
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import InfoIcon from '@material-ui/icons/Info';
import LoginMenu from '../login/LoginMenu';

//const drawerWidth = 240

const custom = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        padding: '20px',
      },
    },
  },
});

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    // [theme.breakpoints.up('sm')]: {
    //   display: 'none',
    // },
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  menuItems: {
    marginLeft: theme.spacing(5),
  },
  customBar: {
    backgroundColor: 'transparent',
  }
}))

export const Navbar = (props) => {

  const classes = useStyles()
  const [modal, abrirModal] = React.useState(false);

  const { userConfig, setUserConfig } = React.useContext(ThemeContext)

  const acaoAbrirModal = () => {
    abrirModal(true)
  }

  const acaoFecharModal = () => {
    abrirModal(false)
  }

  React.useEffect(() => {
    const userConfiguration = JSON.parse(localStorage.getItem('userconfig'))
    
    if (userConfiguration)
      setUserConfig(userConfiguration)
  }, [setUserConfig])

  return (
    <div>
      <AppBar className={classes.customBar} elevation={0}>
        <Toolbar>

          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              onClick={() => props.acaoAbrir()}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" className={classes.title}>
            CINEMA
            <Hidden smDown>
              <span className={classes.menuItems}>
                <ThemeProvider theme={custom}>
                  <Button component={Link} to="/" variant="text" color="inherit" startIcon={<HomeIcon />}>Página Inicial</Button>
                  <Button component={Link} to="/vagas" variant="text" color="inherit" startIcon={<MovieFilterIcon />}>Em alta</Button>
                  <Button component={Link} to="/sobre" variant="text" color="inherit" startIcon={<InfoIcon />}>Sobre</Button>
                </ThemeProvider>
              </span>
            </Hidden>
          </Typography>

          {
            userConfig ?
              (
                <LoginMenu user={userConfig.userInfo.user} />
              ) : (
                <Button variant="text" color="inherit" onClick={() => acaoAbrirModal()}>
                  Login
                </Button>
              )
          }

        </Toolbar>
      </AppBar>

      <Modal onClose={acaoFecharModal} open={modal} />

    </div>
  )
}