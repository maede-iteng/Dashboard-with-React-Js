import { makeStyles } from '@material-ui/styles';

export const titleOfPageStyles = makeStyles((theme) => ({
  arrowIcon: {
    '&.MuiSvgIcon-root': {
      fontSize: '15px',
      marginRight: '10px',
      marginLeft: '10px',
    },
  },
  textColor: {
    color: theme.palette.primary.contrastText,
  },
  link: {
    ['@media (min-width:960px)']: {
      textAlign: 'right',
    },
  },
}));
