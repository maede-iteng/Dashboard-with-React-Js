import { Grid, LinearProgress, Typography } from '@material-ui/core';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { IoLayersOutline } from 'react-icons/io5';
import React, { useEffect } from 'react';
import { cardStyles } from './styles';
import { cardData } from '../../assets/dummyDate';

const Card = () => {
  const classes = cardStyles();
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 60) {
          return 60;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Grid
      container
      className={`${classes.typography} whiteColor ${classes.homeWidget}`}
      justifyContent="space-between"
      alignItems="center"
    >
      {cardData.map((data) => {
        return (
          <Grid item xs={12} sm={12} md={3} lg={3} key={data.id} className={classes.card}>
            <Grid item container spacing={3}>
              <Grid item className={classes.iconBox}>
                {data.icon}
              </Grid>
              <Grid item>
                <Typography variant="body1">{data.title}</Typography>
                <Typography variant="h5">{data.members}</Typography>
              </Grid>
            </Grid>
            <Typography variant="body1">{data.free}</Typography>
            <Typography variant="body1">{data.paid}</Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              className={classes.linearProgress}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Card;
