import * as React from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';

export default function ProdutoForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cadastrar Produto
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <TextField
            id="produtoNome"
            label="Nome"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            id="produtoDescricao"
            label="Descrição"
            fullWidth
            multiline
            rows={4}
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="produtoPreco"
            label="Preço"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="produtoQuantidade"
            label="Quantidade"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button color="error" variant="outlined">Cancelar</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button color="success" variant="contained">Cadastrar</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}