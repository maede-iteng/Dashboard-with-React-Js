import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import { data, options } from '../Charts/VerticalChart';
import { notificationData } from '../../assets/dummyDate';
import React from 'react';
import '../../assets/globalStyles/styles/main.css';
import { firstWidgetStyles } from './styles';

const FirstWidget = () => {
  const classes = firstWidgetStyles();
  return (
    <Grid container justifyContent="space-between" spacing={2}>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box className={classes.chartContainer}>
          <Bar options={options} data={data} />
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box className={classes.box}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">Recent Notification</Typography>
            </Grid>
            <Grid item>
              <Button size="small" variant="contained" className={classes.btnColor}>
                view all
              </Button>
            </Grid>
          </Grid>
          <Box className={classes.notificationSection}>
            {notificationData.map((notification) => {
              return (
                <React.Fragment key={notification.id}>
                  <Grid
                    container
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.contentWrapper}
                  >
                    <Grid item className={classes.iconWrapper}>
                      <div className={classes.imgWrapper}>
                        <img src={notification.icon} alt="icon" className={classes.notifIcon} />
                      </div>
                    </Grid>
                    <Grid item className={classes.notifWrapper}>
                      <Typography variant="subtitle1" gutterBottom>
                        {notification.message}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        {notification.date}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.durationTextWrapper}>
                      <Typography color="secondary">{notification.duration}</Typography>
                    </Grid>
                  </Grid>
                  <Divider className={classes.divider} />
                </React.Fragment>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default FirstWidget;
