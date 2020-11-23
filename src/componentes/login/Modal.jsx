import React from 'react'
import { Dialog, Paper, Snackbar, Tab, Tabs, Box, Typography, Grid } from '@material-ui/core';
import Login from './Login';
import Alert from '@material-ui/lab/Alert';
import SignIn from './SignIn';

const Modal = (props) => {
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [alertError, setAlertError] = React.useState(false);
  const [alertSuccess, setAlertSuccess] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const alertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertError(false);
    setAlertSuccess(false);
  };

  return (
    <div>
      <div>
        <Snackbar open={alertError} autoHideDuration={6000} onClose={alertClose}>
          <Alert onClose={alertClose} severity={'error'} elevation={2} variant="filled">{error}</Alert>
        </Snackbar>
        <Snackbar open={alertSuccess} autoHideDuration={6000} onClose={alertClose}>
          <Alert onClose={alertClose} severity={'success'} elevation={2} variant="filled">{success}</Alert>
        </Snackbar>
      </div>

      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <Paper square>
          <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="menu de abas">
            <Tab label="Entrar" />
            <Tab label="Cadastrar" />
          </Tabs>
        </Paper>
        {
          value === 0 ?
          (
            <Login 
            onClose={props.onClose} 
            setError={setError} 
            setAlertError={setAlertError}
            />
          ) :
          (
            <SignIn 
            onClose={props.onClose} 
            setError={setError} 
            setSuccess={setSuccess} 
            setAlertSuccess={setAlertSuccess}
            setAlertError={setAlertError}
            />
          )
        }
      </Dialog>
    </div>
  )
}

export default Modal