import React from 'react';
import { createTheme, Container, TextField, Grid, Avatar } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles, styled } from '@material-ui/styles';
import SearchOutlinedIcon from '@material-ui/icons/Search';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import '../assets/globalStyles/styles/main.css';

import DashboardPopper from '../component/DashboardPopper/DashboardPopper';
import { topBarStyles, CustomTextField } from './styles';

const TopBar = () => {
  const classes = topBarStyles();
  return (
    <header className={classes.header}>
      <Grid container alignItems="center">
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
          <CustomTextField
            variant="outlined"
            label="Search Here"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon className={classes.searchIcon} />
                </InputAdornment>
              ),
            }}
            className={classes.div}
          />
        </Grid>
        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
          <NotificationsActiveOutlinedIcon className={classes.bellIcon} />
        </Grid>
        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
          <DashboardPopper />
        </Grid>
      </Grid>
    </header>
  );
};
export default TopBar;
