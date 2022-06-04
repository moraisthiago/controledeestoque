import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios';

// Generate Order Data
function createData(
  id: number,
  name: string,
  shipTo: string,
) {
  return { id, name, shipTo };
}

const rows = [
  createData(
    0,
    'Elvis Presley',
    'Tupelo, MS',
  ),
  createData(
    1,
    'Paul McCartney',
    'London, UK',
  ),
  createData(
      2, 
      'Tom Scholz', 
      'Boston',
  ),
  createData(
    3,
    'Michael Jackson',
    'Gary, IN',
  ),
  createData(
    4,
    'Bruce Springsteen',
    'Long Branch, NJ',
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
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
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}