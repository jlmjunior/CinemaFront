import { Button, Grid, makeStyles, Typography, createMuiTheme, ThemeProvider, Fab, Snackbar } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as Api from '../api/AdminApi'
import { Link } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';

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

  const [users, setUsers] = React.useState(null);
  const [success, setSuccess] = React.useState('');
  const [alertSuccess, setAlertSuccess] = React.useState(false);

  const buscarUsuarios = React.useCallback(async () => {
    const response = await Api.GetUsers();

    setUsers(response.data.users);
  }, []);

  React.useEffect(() => {
    buscarUsuarios();
  }, [buscarUsuarios]);

  const deleteUser = async (usuario) => {
    const response = await Api.DeleteUser(usuario);

    if (response.status === 200) {
      const filtro = users.filter(user => user.Usuario !== usuario);
      setUsers(filtro);

      setSuccess('Usuário deletado com sucesso!')
      setAlertSuccess(true);
    }
  }

  const alertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertSuccess(false);
  };

  return (
    <ThemeProvider theme={custom}>

      <div>
        <Snackbar open={alertSuccess} autoHideDuration={6000} onClose={alertClose}>
          <Alert onClose={alertClose} severity={'success'} elevation={2} variant="filled">{success}</Alert>
        </Snackbar>
      </div>

      <div className={classes.lateral} >
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Fab style={{ marginTop: '30px' }} size="medium" component={Link} to="/" color="primary">
            <ArrowBackIcon />
          </Fab>
        </div>
      </div>
      <div className={classes.central}>
        <Grid container spacing={3}>
          <Grid item xl={12}>
            <div className={classes.caixa}>
              <Typography className={classes.title}>USUÁRIOS</Typography>
              <table className={classes.customTable}>
                <thead>
                  <tr>
                    <th><Typography className={classes.titleCustom} color="primary">Username</Typography></th>
                    <th><Typography className={classes.titleCustom} color="primary">Role</Typography></th>
                    <th><Typography className={classes.titleCustom} color="primary"></Typography></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users &&
                      users.map((item, index) => (
                        <tr key={index}>
                          <td><Typography className={classes.fontCustom}>{item.Usuario}</Typography></td>
                          <td><Typography className={classes.fontCustom}>{item.Role === 1 ? "Administrador" : "Usuário"}</Typography></td>
                          <td style={{ textAlign: 'right' }}>
                            <Button 
                            startIcon={<DeleteIcon />} 
                            variant="contained" 
                            color="secondary"
                            onClick = {() => deleteUser(item.Usuario)}
                            >
                              Deletar
                            </Button>
                          </td>
                        </tr>
                      ))
                  }

                </tbody>
              </table>
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Admin
