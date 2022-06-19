import React from 'react';
import { Box, Typography } from '@material-ui/core';
import TitleOfPages from '../component/TitleOfPages/TitleOfPages';
import {
  StyledTableContainer,
  StyledTableRow,
  StyleTableHead,
  StyleTableCell,
  boardStyles,
} from './styles';
import { board } from '../assets/dummyDate';
import { Table, TableBody, TableHead, TableRow, Paper } from '@material-ui/core';

const Board = () => {
  const classes = boardStyles();
  return (
    <React.Fragment>
      <TitleOfPages
        title="leader Board"
        welcomeMessage="Welcome to Edunet leader Board page"
        prevPage="Home"
        currentPage="leader Board"
        prevPageLink="/home"
        currentPageLink="/board"
      />
      <Box className={classes.marginBottom}>
        <StyledTableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyleTableHead>CourseName</StyleTableHead>
                <StyleTableHead align="right">Category</StyleTableHead>
                <StyleTableHead align="right">Ranking</StyleTableHead>
                <StyleTableHead align="right">Impression</StyleTableHead>
                <StyleTableHead align="right">Sales</StyleTableHead>
                <StyleTableHead align="right">Earning</StyleTableHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {board.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyleTableCell scope="row">
                    <img src={row.CourseLogo} alt="logo" className={classes.courseLogo} />
                    <Typography variant="subtitle1">{row.CourseName}</Typography>
                  </StyleTableCell>
                  <StyleTableCell align="right">{row.Category}</StyleTableCell>
                  <StyleTableCell align="right">
                    {row.RankingIcon} {row.Ranking}
                  </StyleTableCell>
                  <StyleTableCell align="right">{row.Impression}</StyleTableCell>
                  <StyleTableCell align="right">{row.Sales}</StyleTableCell>
                  <StyleTableCell align="right">{row.Earning}</StyleTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Box>
    </React.Fragment>
  );
};
export default Board;
