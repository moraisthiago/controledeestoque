import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import axios from 'axios';

export default function EstoqueForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const url = "http://localhost:4000/api/estoques";
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post(url, {
      nome: data.get('nome'),
      descricao: data.get('descricao'),
    })
    console.log({
      nome: data.get('nome'),
      descricao: data.get('descricao'),
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Adicionar Estoque
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastrar Estoque</DialogTitle>
        <DialogContent>
        <Grid component="form" onSubmit={handleSubmit} container spacing={4}>
          <Grid item xs={12} md={12}>
            <TextField 
              id="nome"
              name="nome"
              label="Nome"
              fullWidth
              required
              autoComplete="nome"
              autoFocus
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField 
              id="descricao"
              name="descricao"
              label="Descrição"
              fullWidth
              required
              autoComplete="descricao"
              multiline
              rows={4}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} md={12} sm={12} >
          <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Cadastrar</Button>
          </DialogActions>
          </Grid>
        </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
