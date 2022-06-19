import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { titleOfPageStyles } from './styles';

const TitleOfPages = (props) => {
  const classes = titleOfPageStyles();
  return (
    <Grid container alignItems="center">
      <Grid md={6} xs={12} item>
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="body1">{props.welcomeMessage}</Typography>
      </Grid>
      <Grid md={6} xs={12} item className={`${classes.textColor} ${classes.link}`}>
        <Link to={props.prevPageLink}>{props.prevPage}</Link>
        <ArrowForwardIosOutlinedIcon className={classes.arrowIcon} />
        <Link to={props.currentPageLink}>{props.currentPage}</Link>
      </Grid>
    </Grid>
  );
};
export default TitleOfPages;
