import React from 'react';
import { Table, TableBody, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import {
  StyledTableContainer,
  StyledTableRow,
  StyleTableHead,
  StyleTableCell,
  useStyles,
} from './styles';

const TableComponent = (props) => {
  const classes = useStyles();
  return (
    <>
      <StyledTableContainer component={Paper}>
        <Table aria-label="customized table" className={classes.table}>
          <TableHead>
            <TableRow>
              <StyleTableHead>Description</StyleTableHead>
              <StyleTableHead align="right">TR ID</StyleTableHead>
              <StyleTableHead align="right">Date</StyleTableHead>
              <StyleTableHead align="right">Amount</StyleTableHead>
              <StyleTableHead align="right">Card</StyleTableHead>
              <StyleTableHead align="right">Status</StyleTableHead>
              <StyleTableHead align="right">Receipt</StyleTableHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <StyledTableRow key={row.description}>
                <StyleTableCell scope="row">{row.description}</StyleTableCell>
                <StyleTableCell align="right">{row.trID}</StyleTableCell>
                <StyleTableCell align="right">{row.date}</StyleTableCell>
                <StyleTableCell align="right">{row.amount}</StyleTableCell>
                <StyleTableCell align="right">{row.card}</StyleTableCell>
                <StyleTableCell align="right">{row.status}</StyleTableCell>
                <StyleTableCell align="right">
                  <Button className={classes.receiptIcon}>{row.receipt}</Button>
                </StyleTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};
export default TableComponent;
