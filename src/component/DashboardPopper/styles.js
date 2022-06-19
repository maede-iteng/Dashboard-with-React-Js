import { makeStyles } from '@material-ui/styles';

export const dashboardMenuStyles = makeStyles((theme) => ({
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  paperProps: {
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    marginTop: '4.1rem',
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      marginLeft: -0.5,
      marginRight: '24px',
    },
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      backgroundColor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
    '& .MuiMenuItem-root': {
      paddingTop: '8px',
      paddingBottom: '8px',
      color: theme.palette.primary.contrastText,
    },
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  divider: {
    '&.MuiDivider-root': {
      backgroundColor: theme.palette.secondary.light,
      marginTop: '.5rem',
      marginBottom: '.5rem',
    },
  },
}));
