import { Button, Grid, makeStyles, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Layout from '../componentes/layout/Layout'
import BarraLateral from '../componentes/nav/BarraLateral';

const custom = createMuiTheme({
  palette: {
    primary: {
        main: '#18569B',
    },
    secondary: {
      main: "#9C1919",
    },
  },
});

const useStyles = makeStyles(theme => ({
  lista: {
    color: '#fff',
  },
  main: {
    backgroundColor: '#161616',
  },
  toolbar: theme.mixins.toolbar,
  lateral: {
    display: 'flex',
    float: 'left',
    width: '80px',
    backgroundColor: '#1C1C1E',
    height: '100%',
  },
  central: {
    display: 'flex',
    padding: '40px',
  },
  caixa: {
    backgroundColor: '#1C1C1E',
    padding: '25px',
    borderRadius: '5px',
  },
  title: {
    fontWeight: '600',
    letterSpacing: '0.15em',
    color: '#fff',
  },
  customTable: {
    width: '100%',
    marginTop: '20px',
    color: '#9C9C9C',
  },
  fontCustom: {
    letterSpacing: '0.08em',
  },
  titleCustom: {
    letterSpacing: '0.08em',
    fontWeight: '600',
  },
}));

const Admin = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={custom}>

    
      <div className={classes.lateral}>

      </div>
      <div className={classes.central}>
        <Grid container spacing={3}>
          <Grid item xl={6}>
            <div className={classes.caixa}>
              <Typography className={classes.title}>USUÁRIOS</Typography>
              <table className={classes.customTable}>
                <tr>
                  <th><Typography className={classes.titleCustom} color="primary">Username</Typography></th>
                  <th><Typography className={classes.titleCustom} color="primary">Role</Typography></th>
                  <th><Typography className={classes.titleCustom} color="primary"></Typography></th>
                </tr>
                <tr>
                  <td><Typography className={classes.fontCustom}>Junior</Typography></td>
                  <td><Typography className={classes.fontCustom}>Administrador</Typography></td>
                  <td style={{ textAlign: 'right' }}>
                    <Button startIcon={<DeleteIcon />} variant="contained" color="secondary">Deletar</Button>
                  </td>
                </tr>
              </table>
            </div>
          </Grid>
          <Grid item xl={6}>
            <div className={classes.caixa}>
              <Typography className={classes.title}>SESSÕES</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Admin
