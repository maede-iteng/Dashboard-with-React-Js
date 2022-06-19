import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { groupDiscussions } from '../assets/dummyDate';
import { data, options } from '../component/Charts/VerticalChart';
import { Bar } from 'react-chartjs-2';
import CircularStatic from '../component/CircularProgress/CircularProgress';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TitleOfPages from '../component/TitleOfPages/TitleOfPages';
import { walletStyles } from './styles';

const Wallet = () => {
  const classes = walletStyles();
  return (
    <React.Fragment>
      <TitleOfPages
        title="Wallet"
        welcomeMessage="Welcome to Edunet Wallet page"
        prevPage="Home"
        currentPage="Wallet"
        prevPageLink="/home"
        currentPageLink="/wallet"
      />
      <Grid container className={classes.coursesContainer} spacing={2}>
        <Grid item xl={8} lg={8} md={7} sm={12} xs={12} className={classes.cardWrapper}>
          <Typography variant="h5">Profile Visitor</Typography>
          <Box className={classes.chartContainer}>
            <Bar options={options} data={data} />
          </Box>
        </Grid>
        <Grid item xl={4} lg={4} md={5} sm={12} xs={12}>
          <Typography variant="h5">Top Sales</Typography>
          {groupDiscussions.map((item) => {
            return (
              <Grid
                key={item.name}
                className={classes.typeOfGroup}
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid xl={2} lg={2} md={2} sm={1} xs={2} item>
                  <img src={item.logo} alt={item.name} className={classes.logo} />
                </Grid>
                <Grid xl={6} lg={7} md={7} sm={8} xs={7} item>
                  <Grid>
                    <Typography variant="body1">{item.name}</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="body2">{item.title}</Typography>
                  </Grid>
                </Grid>
                <Grid xl={4} lg={2} md={2} sm={2} xs={2} item>
                  <Typography variant="body1" className={classes.textAlign}>
                    {item.members}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={6} md={7} sm={12} xs={12}>
          <Box className={classes.myBalance}>
            <Typography variant="h5">My Balance</Typography>
            <Grid
              container
              className={classes.myBalanceData}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item lg={3}>
                <Typography variant="body1">Available</Typography>
                <Typography variant="h5">$1764</Typography>
              </Grid>
              <Grid item lg={4}>
                <Typography variant="body1">Income</Typography>
                <Typography variant="h5">
                  $3650 <ArrowUpwardIcon className={classes.arrowUpwardIcon} />
                </Typography>
              </Grid>
              <Grid item lg={3}>
                <CircularStatic value={66} />
              </Grid>
            </Grid>
            <Grid
              container
              className={classes.myBalanceData}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item lg={3}>
                <Typography variant="body1">Pending</Typography>
                <Typography variant="h5">$235</Typography>
              </Grid>
              <Grid item lg={4}>
                <Typography variant="body1">Withdraw</Typography>
                <Typography variant="h5">
                  2355 <ArrowDownwardIcon className={classes.arrowDownwardIcon} />
                </Typography>
              </Grid>
              <Grid item lg={3}>
                <CircularStatic value={32} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Wallet;
