import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Grid } from '@material-ui/core';
import * as Api from '../../api/AdminApi'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const AddSession = (props) => {
  const dtInicio = '2020-12-01T10:30';
  const dtFim = '2020-12-01T12:30';

  const [filme, setFilme] = React.useState('1');
  const [sala, setSala] = React.useState('1');
  const [inicio, setInicio] = React.useState(dtInicio);
  const [fim, setFim] = React.useState(dtFim);

  const [listaFilmes, setListaFilmes] = React.useState(null);
  const [listaSalas, setListaSalas] = React.useState(null);

  const buscarFilmes = React.useCallback(async () => {
    const response = await Api.BuscarFilmes();

    setListaFilmes(response.data.movies);
  }, []);

  const buscarSalas = React.useCallback(async () => {
    const response = await Api.BuscarSalas();

    setListaSalas(response.data.rooms);
  }, []);

  const cadastrarSessao = async () => {
    const resp = await Api.CadastrarSessao(filme, sala, inicio, fim, props.token);

    if (resp === 200) {
      props.addSession();
      props.setSuccess('Sessão cadastrada com sucesso!');
      props.openSuccess(true);
      props.onClose();
    }
  }

  React.useEffect(() => {
    buscarFilmes();
    buscarSalas();
  }, [buscarFilmes, buscarSalas]);

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Nova Sessão</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>

          <InputLabel style={{ marginTop: '20px' }} id="lblFilme">Filme</InputLabel>
          <Select fullWidth labelId="lblFilme" onChange={(e) => setFilme(e.target.value)} value={filme}>
            {
              listaFilmes &&
              listaFilmes.map((item, index) => (
                <MenuItem key={index} value={item.Id}>{item.Titulo}</MenuItem>
              ))
            }
          </Select>

          <InputLabel style={{ marginTop: '20px' }} id="lblSala">Sala</InputLabel>
          <Select fullWidth labelId="lblSala" onChange={(e) => setSala(e.target.value)} value={sala}>
            {
              listaSalas &&
              listaSalas.map((item, index) => (
                <MenuItem key={index} value={item.Id}>{item.Descricao}</MenuItem>
              ))
            }
          </Select>

          <Grid style={{ marginTop: '30px' }} container spacing={2}>
            <Grid item xs={6}>
              <TextField
              fullWidth
              id="datetime-local"
              label="Início"
              type="datetime-local"
              defaultValue={inicio}
              onChange={(e) => setInicio(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                id="datetime-local"
                label="Fim"
                type="datetime-local"
                defaultValue={fim}
                onChange={(e) => setFim(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => cadastrarSessao()} color="primary">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddSession
