import React from 'react'
import { Button, TextField, DialogActions, DialogContentText, DialogTitle, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../context/GlobalContext'
import * as Api from '../../api/LoginApi'

const useStyles = makeStyles(() => ({
  simulatedDialogContent: {
    padding: '16px 24px',
  },
  textArea: {
    marginBottom: '20px',
  },
}))

const SignIn = (props) => {
  const classes = useStyles()

  const {setLoading} = React.useContext(ThemeContext)

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const cadastrar = async () => {
    props.onClose()
    setLoading(true)

    let response = await Api.Register({ 
      username: username, 
      password: password, 
      confirmPassword: confirmPassword  
    })

    if (response === 200) {
      props.setSuccess('Usuário cadastrado com sucesso');
      props.setAlertSuccess(true);
    } else if (response === 400) {
      props.setError('Usuário já cadastrado')
      props.setAlertError(true)
    } else {
      props.setError('Falha ao cadastrar')
      props.setAlertError(true)
    }

    console.log(response)
    setLoading(false)
  }

  return (
    <div>
      <div className={classes.simulatedDialogContent}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              required
              id="username"
              label="Usuário"
              type="text"
              fullWidth
              onChange={ (e) => setUsername(e.target.value) }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              required
              id="password"
              label="Senha"
              type="password"
              fullWidth
              onChange={ (e) => setPassword(e.target.value) }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              required
              id="confirmPassword"
              label="Confirmar Senha"
              type="password"
              fullWidth
              onChange={ (e) => setConfirmPassword(e.target.value) }
            />
          </Grid>
        </Grid>  
      </div>
      <DialogActions>
        <Button onClick={() => props.onClose()} color="primary">
          Cancel
        </Button>
        <Button onClick={() => cadastrar()} color="primary">
          Cadastrar
        </Button>
      </DialogActions>
    </div>
  )
}

export default SignIn