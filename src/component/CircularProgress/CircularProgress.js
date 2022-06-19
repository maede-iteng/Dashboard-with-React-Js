import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Typography, Box } from '@material-ui/core';
import { useStyles } from './styles';

function CircularProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Box className={classes.CircularProgressWrapper}>
      <CircularProgress
        className={classes.circularProgress}
        style={{ width: '100px', height: '100px' }}
        variant="determinate"
        {...props}
      />
      <Box className={classes.valueOfCircularProgress}>
        <Typography variant="h6" component="div">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.value ? props.value : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
