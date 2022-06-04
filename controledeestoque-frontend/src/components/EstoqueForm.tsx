import * as React from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import axios from 'axios';

export default function Estoque() {

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
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cadastrar Estoque
      </Typography>
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
          <Grid item xs={12} md={6}>
            <Button color="error" variant="outlined">Cancelar</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button type="submit" color="success" variant="contained">Cadastrar</Button>
          </Grid>
        </Grid>
    </React.Fragment>
  );
}