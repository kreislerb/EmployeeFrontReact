import * as React from 'react';
import Table from '@mui/material/Table';
import { useState, useEffect } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const numberFormat = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

export default function DataTable(props) {

  const [data, setData] = useState([]);

  useEffect(()=> {
    if(props.data !==  data){
      console.log("Data Updated")
      setData(props.data);
    }
  },[props]);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Ocuppation</TableCell>
            <TableCell align="center">Salary</TableCell>
            <TableCell align="center">Annual Salary</TableCell>
            <TableCell align="center">Ative</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name +" "+ row.surname}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.ocupation}</TableCell>
              <TableCell align="left">{numberFormat(row.salary)}</TableCell>
              <TableCell align="left">{numberFormat(row.annualSalary)}</TableCell>
              <TableCell align="center">{(row.status) ? "YES": "NO"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}