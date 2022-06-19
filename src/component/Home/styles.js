import { makeStyles } from '@material-ui/styles';

export const cardStyles = makeStyles((theme) => ({
  homeWidget: {
    marginTop: '1rem',
    marginBottom: '2rem',
  },
  card: {
    minWidth: '31.3%',
    // height:'200px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '1rem',
    marginTop: '1rem',
  },
  linearProgress: {
    marginTop: '.5rem',
    '&.MuiLinearProgress-colorPrimary': {
      backgroundColor: theme.palette.primary.contrastText,
      height: '5px',
      borderRadius: '5px',
    },
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  icon: {
    fontSize: '2rem',
  },
  iconBox: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    margin: '1rem',
    borderRadius: '5px',
  },
}));
export const firstWidgetStyles = makeStyles((theme) => ({
  iconBox: {
    backgroundColor: theme.palette.secondary.main,
    margin: '1rem',
    borderRadius: '5px',
  },
  fontSize: {
    fontSize: '1.5rem',
  },
  box: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '.5rem 1.8rem',
    marginTop: '1rem',
    height: '400px',
  },
  chartContainer: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '1.8rem',
    marginTop: '1rem',
    // height:'100%',
    position: 'relative',
    margin: 'auto',
    height: '400px',
    width: '100%',
  },
  notificationSection: {
    marginTop: '1rem',
    transition: 'overflow linear .2s',
    height: '302px',
    overflow: 'hidden auto',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#a9a9a9',
      borderRadius: '200px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '100px',
      backgroundImage: 'linear-gradient(180deg, #1C1C1F 0%, #252529 99%)',
      boxShadow: 'inset 2px 2px 5px 0 rgba(#fff, 0.5)',
    },
  },
  iconWrapper: {
    ['@media (max-width:600px)']: {
      width: '13%',
    },
    ['@media (min-width:600px)']: {
      width: '5%',
    },
    ['@media (min-width:960px)']: {
      width: '12%',
    },
    ['@media (min-width:1280px)']: {
      width: '8%',
    },
  },
  notifWrapper: {
    ['@media (max-width:600px)']: {
      width: '62%',
    },
    ['@media (min-width:600px)']: {
      width: '63%',
    },
    ['@media (min-width:960px)']: {
      width: '63%',
    },
    ['@media (min-width:1280px)']: {
      width: '72%',
    },
  },
  durationTextWrapper: {
    textAlign: 'right',
    ['@media (max-width:600px)']: {
      width: '25%',
    },
    ['@media (min-width:600px)']: {
      width: '25%',
    },
    ['@media (min-width:960px)']: {
      width: '25%',
    },
    ['@media (min-width:1280px)']: {
      width: '20%',
    },
  },
  notifIcon: {
    width: '25px',
    color: ' #74849D',
  },
  divider: {
    '&.MuiDivider-root': {
      backgroundColor: theme.palette.secondary.light,
      marginTop: '.5rem',
      marginBottom: '.5rem',
    },
    '&.MuiDivider-root:last-child': {
      display: 'none',
    },
  },
  imgWrapper: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnColor: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
}));
export const secondWidgetStyles = makeStyles((theme) => ({
  icon: {
    width: '25px',
    borderRadius: '50%',
  },
  closeIcon: {
    backgroundColor: '#FCD9E1',
    width: '40px',
    height: '40px',
    margin: '.5rem',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'inline-flex',
  },
  checkIcon: {
    backgroundColor: '#D2F7E7',
    width: '40px',
    height: '40px',
    margin: '.5rem',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'inline-flex',
  },
  fontSize: {
    fontSize: '1.5rem',
  },
  box: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '1.8rem',
    marginTop: '1rem',
    height: '400px',
  },
  chartContainer: {
    // position:'relative',
    margin: 'auto',
    height: '400px',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '1.8rem',
    marginTop: '1rem',
  },
  studentQueries: {
    marginTop: '1rem',
    transition: 'overflow linear .2s',
    height: '300px',
    overflow: 'hidden auto',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#a9a9a9',
      borderRadius: '200px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '100px',
      backgroundImage: 'linear-gradient(180deg, #1C1C1F 0%, #252529 99%)',
      boxShadow: 'inset 2px 2px 5px 0 rgba(#fff, 0.5)',
    },
  },
  avatarWrapper: {
    ['@media (max-width:600px)']: {
      width: '18%',
    },
    ['@media (min-width:600px)']: {
      width: '12%',
    },
    ['@media (min-width:960px)']: {
      width: '15%',
    },
    ['@media (min-width:1280px)']: {
      width: '10%',
    },
  },
  Queries: {
    ['@media (max-width:600px)']: {
      width: '62%',
    },
    ['@media (min-width:600px)']: {
      width: '63%',
    },
    ['@media (min-width:960px)']: {
      width: '60%',
    },
    ['@media (min-width:1280px)']: {
      width: '60%',
    },
  },
  btnWrapper: {
    textAlign: 'right',
    ['@media (max-width:600px)']: {
      width: '20%',
    },
    ['@media (min-width:600px)']: {
      width: '25%',
    },
    ['@media (min-width:960px)']: {
      width: '25%',
    },
    ['@media (min-width:1280px)']: {
      width: '25%',
    },
  },
  avatar: {
    width: '50px',
    color: ' #74849D',
    borderRadius: '50%',
  },
  divider: {
    '&.MuiDivider-root': {
      backgroundColor: theme.palette.secondary.light,
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    '&.MuiDivider-root:last-child': {
      display: 'none',
    },
  },
}));
export const thirdWidgetStyles = makeStyles((theme) => ({
  iconBox: {
    backgroundColor: theme.palette.secondary.main,
    margin: '1rem',
    borderRadius: '5px',
  },
  arrowIcon: {
    width: '25px',
    color: ' #74849D',
  },
  fontSize: {
    fontSize: '1.5rem',
  },
  box: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '1.8rem',
    marginTop: '1rem',
    marginBottom: '5rem',
    height: '400px',
    // height:'100%',
    position: 'relative',
  },
  balance: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '1.8rem',
    marginTop: '1rem',
  },
  chartContainer: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '1.8rem',
    marginTop: '1rem',
    // height:'100%',
    position: 'relative',
    margin: 'auto',
    height: '400px',
    width: '100%',
  },
  notifIcon: {
    width: '25px',
    color: ' #74849D',
  },
  textAlign: {
    textAlign: 'right',
  },
  imgWrapper: {
    width: '30px',
    height: '30px',
    borderRadius: '5px',
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center',
    float: 'right',
  },
  balanceItem: {
    borderRadius: '5px',
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: theme.palette.secondary.light,
    boxSizing: 'border-box',
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: 'rgba(4, 201, 183, .5)',
      border: '1px dashed #04C9B7',
    },
  },
}));
