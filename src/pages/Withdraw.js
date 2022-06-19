import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import visaCardImage from '../assets/image/visa.png';
import simImage from '../assets/image/sim.png';
import masterCard from '../assets/image/mastercard.png';
import TableComponent from '../component/Table/TableComponent';
import { withdrawTable } from '../assets/dummyDate';
import TitleOfPages from '../component/TitleOfPages/TitleOfPages';
import { withdrawStyles } from './styles';

const Withdraw = () => {
  const classes = withdrawStyles();
  return (
    <>
      <TitleOfPages
        title="Withdraw"
        welcomeMessage="Welcome to Edunet Withdraw page"
        prevPage="Home"
        currentPage="Withdraw"
        prevPageLink="/home"
        currentPageLink="/withdraw"
      />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item container xl={5} lg={5} md={5} sm={12} xs={12} className={classes.cartWrapper}>
          <Grid item container justifyContent="space-between" alignItems="center">
            <Grid item lg={7}>
              <Typography variant="body1">Balance</Typography>
              <Typography variant="h6">$9843</Typography>
            </Grid>
            <Grid item lg={3}>
              <img src={visaCardImage} alt="visaCardImage" />
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4">4785 9856 2563 1254</Typography>
          </Grid>
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Typography variant="body1">CARD HOLDER</Typography>
              <Typography variant="body2">Saiful Islam</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">VALID TILL</Typography>
              <Typography variant="body2">11/21</Typography>
            </Grid>
            <Grid item>
              <img src={simImage} alt="simImage" className={classes.simImage} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xl={5} lg={5} md={5} sm={12} xs={12} className={classes.cartWrapper}>
          <Grid item container justifyContent="space-between" alignItems="center">
            <Grid item lg={7}>
              <Typography variant="body1">Balance</Typography>
              <Typography variant="h6">$9843</Typography>
            </Grid>
            <Grid item lg={3}>
              <img src={masterCard} alt="visaCardImage" />
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4">1457 3254 4788 5687</Typography>
          </Grid>
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Typography variant="body1">CARD HOLDER</Typography>
              <Typography variant="body2">Saiful Islam</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">VALID TILL</Typography>
              <Typography variant="body2">11/21</Typography>
            </Grid>
            <Grid item>
              <img src={simImage} alt="simImage" className={classes.simImage} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box className={classes.marginBottom}>
        <Typography variant="h5">Transaction</Typography>
        <TableComponent data={withdrawTable} />
      </Box>
    </>
  );
};
export default Withdraw;
