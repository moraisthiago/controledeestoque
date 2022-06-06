import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import ProdutoForm from './ProdutoForm';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.frexco.com.br/" target="_blank">
        Frexco
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Produtos() {

  interface Produto {
    id_produto: number;
    nome: string;
    descricao: string;
    quantidade: number;
    id_estoque: number;
  }
  
  const url = "http://localhost:4000/api/produtos"

  const [cards, setCards] = useState<Produto[]>([]);

  useEffect(() => {

    axios.get(url)
    .then((result) => {
      console.log(result);
      setCards(result.data);
    });
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:4000/api/produtos/${id}`)
    .then(result => {
        setCards(oldCards => [
            ...oldCards.filter(oldCard => oldCard.id_produto !== id),
        ]);
        alert('Registro apagado com sucesso!');
        })};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <InventoryRoundedIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Produtos
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <ProdutoForm />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id_produto} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.nome}
                    </Typography>
                    <Typography>
                      {card.descricao}
                    </Typography>
                    <Typography>
                      Quantidade: {card.quantidade}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid item xs={8} sm={8} md={8}>
                    <Button size="small" onClick={() => handleDelete(card.id_produto)} >Excluir</Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}