import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { balance } from '../../assets/dummyDate';
import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import '../../assets/globalStyles/styles/main.css';
import MapChart from '../Charts/MapChart';
import { thirdWidgetStyles } from './styles';

const ThirdWidget = () => {
  const classes = thirdWidgetStyles();
  const [content, setContent] = useState('');
  return (
    <Box className={classes.boxContainer}>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xl={3} lg={4} md={4} sm={12} xs={12}>
          <Box className={classes.balance}>
            <Typography variant="h5">Balance</Typography>
            <Typography variant="subtitle1">Available Balance</Typography>
            <Typography variant="h4">$856,342</Typography>
            <Box className="balance__item">
              {balance.map((item) => {
                return (
                  <Link to="/" key={item.id}>
                    <Box className={classes.balanceItem}>
                      <Grid
                        container
                        spacing={3}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item lg={10} md={8} sm={10} xs={7}>
                          <Typography variant="subtitle1">{item.title}</Typography>
                          <Typography variant="h5">{item.price}</Typography>
                        </Grid>
                        <Grid item lg={2} md={4} sm={2} xs={3}>
                          <div className={classes.imgWrapper}>
                            <img src={item.arrowIcon} alt="icon" className={classes.arrowIcon} />
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item xl={9} lg={8} md={8} sm={12} xs={12}>
          <Box className={classes.box}>
            <Typography variant="h5">Student Location</Typography>
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ThirdWidget;
