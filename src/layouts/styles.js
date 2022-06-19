import { makeStyles, styled } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

export const sidebarStyles = makeStyles((theme) => ({
  sidebar: {
    flex: 1,
    // height:'calc(100vh - 100px)',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
    padding: '2rem',
    position: 'fixed',
    top: '0',
    left: '0',
    overflowY: 'auto',
    ['@media (max-width:959px)']: {
      height: '50px',
      top: 'auto',
      bottom: '0',
      width: '100%',
      zIndex: 100,
      marginTop: '1rem',
    },
  },
  logo: {
    width: '30px',
    ['@media (max-width:959px)']: {
      display: 'none',
    },
  },
  icon: {
    fontSize: '2rem',
    color: theme.palette.secondary.main,
  },
  ulMargin: {
    marginTop: '4.5rem',
    ['@media (max-width:959px)']: {
      marginTop: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  listMargin: {
    marginTop: '3rem',
    marginBottom: '3rem',
    ['@media (max-width:959px)']: {
      // display:'inline-block',
      margin: '-1rem 0',
    },
  },
}));
export const topBarStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.darker,
    paddingTop: '1rem',
    paddingBottom: '1rem',
    flex: '4',
    height: '100px',
    position: 'sticky',
    top: 0,
    zIndex: '2',
  },
  div: {
    '& .MuiInputBase-input': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  searchIcon: {
    color: theme.palette.primary.contrastText,
  },
  bellIcon: {
    color: theme.palette.secondary.main,
  },
}));
export const CustomTextField = styled(TextField)({
  marginTop: '1rem',
  marginBottom: '1rem',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#74849D',
    },
    '&:hover fieldset': {
      borderColor: '#74849D',
    },
  },
});
