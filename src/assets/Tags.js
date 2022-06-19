import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles((theme) => ({
  box: {
    background: '#283240',
    height: '100%',
    display: 'flex',
    padding: '0.4rem',
    margin: '0 0.5rem 0 0',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#ffffff',
  },
  tags: {
    display: 'flex',
  },
  cancelButton: {
    cursor: 'pointer',
    fontSize: '18px',
  },
}));

const Tags = ({ data, handleDelete }) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <div className={classes.tags}>
        <Typography>{data}</Typography>
        <CancelOutlinedIcon className={classes.cancelButton} onClick={() => handleDelete(data)} />
      </div>
    </Box>
  );
};
export default Tags;
