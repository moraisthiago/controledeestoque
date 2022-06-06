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
import { useNavigate } from 'react-router-dom';
import EstoqueForm from './EstoqueForm';
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

export default function Estoques() {

  const navigate = useNavigate();

  interface Estoque {
    id_estoque: number;
    nome: string;
    descricao: string;
  }
  
  const url = "http://localhost:4000/api/estoques"

  const [cards, setCards] = useState<Estoque[]>([]);

  useEffect(() => {

    axios.get(url)
    .then((result) => {
      console.log(result);
      setCards(result.data);
    });
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:4000/api/estoques/${id}`)
    .then(result => {
        setCards(oldCards => [
            ...oldCards.filter(oldCard => oldCard.id_estoque !== id),
        ]);
        alert('Registro apagado com sucesso!');
        })};

  const handleEdit = (id: number) => {
    axios.get(`http://localhost:4000/api/estoques/${id}`)
    .then(result => {
      console.log(result.data)
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <InventoryRoundedIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Estoques
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
              <EstoqueForm />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id_estoque} xs={12} sm={6} md={4}>
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
                  </CardContent>
                  <CardActions>
                    <Grid item xs={3} sm={3} md={3}>
                    <Button size="small" onClick={() => navigate(`/produtos`)} >Abrir</Button>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                    <Button size="small" onClick={() => handleEdit(card.id_estoque)} >Editar</Button>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                    <Button size="small" onClick={() => handleDelete(card.id_estoque)} >Excluir</Button>
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