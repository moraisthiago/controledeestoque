import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../components/Title';
import axios from 'axios';

export default function ListaEstoques() {

  interface Estoque {
    id_estoque: number;
    nome: string;
    descricao: string;
  }
  
  const url = "http://localhost:4000/api/estoques"

  const [rows, setRows] = useState<Estoque[]>([]);

  useEffect(() => {

    axios.get(url)
    .then((result) => {
      console.log(result);
      setRows(result.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Title>Estoques</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id_estoque}>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}