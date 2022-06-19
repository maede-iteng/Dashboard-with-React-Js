import { makeStyles, styled } from '@material-ui/styles';
import { TableCell, TableContainer, TableRow } from '@material-ui/core';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  '&.MuiPaper-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  width: '100%',
  marginTop: theme.spacing.unit * 3,
  overflowX: 'auto',
}));
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.darker,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export const StyleTableHead = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    fontWeight: '600',
    color: theme.palette.primary.contrastText,
  },
}));
export const StyleTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-body': {
    color: theme.palette.primary.contrastText,
  },
  '& .MuiSvgIcon-root': {
    color: '#ffc700',
  },
}));
export const boardStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: '5rem',
  },
  courseLogo: {
    height: '60px',
  },
  table: {
    minWidth: 700,
  },
}));
export const walletStyles = makeStyles((theme) => ({
  coursesContainer: {
    // width:'calc(100% - 350px)',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  card: {
    maxWidth: '345px',
    '&.MuiPaper-root': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.darker,
    },
    '& .MuiCardContent-root': {
      height: '180px',
    },
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: '20px',
  },
  editBtn: {
    backgroundColor: theme.palette.secondary.btnColor,
    '&.MuiButton-contained:hover': {
      backgroundColor: 'green',
    },
  },
  typeOfGroup: {
    backgroundColor: theme.palette.primary.main,
    marginTop: '1rem',
    marginBottom: '1rem',
    padding: '5px',
    borderRadius: '5px',
  },
  logo: {
    width: '60px',
  },
  textAlign: {
    textAlign: 'right',
    color: theme.palette.secondary.main,
  },
  chartContainer: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '1.8rem',
    // height:'100%',
    position: 'relative',
    margin: 'auto',
    height: '400px',
    width: '100%',
  },
  myBalance: {
    backgroundColor: theme.palette.primary.main,
    padding: '1rem',
    borderRadius: '5px',
    marginBottom: '5rem',
  },
  myBalanceData: {
    backgroundColor: 'rgb(49,47,47)',
    marginTop: '1rem',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '5px',
  },
  arrowUpwardIcon: {
    color: theme.palette.secondary.main,
  },
  arrowDownwardIcon: {
    color: 'red',
  },
}));
export const withdrawStyles = makeStyles((theme) => ({
  cartWrapper: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '1rem',
    height: '240px',
    marginTop: '1rem',
    marginBottom: '3rem',
  },
  simImage: {
    height: '50px',
    width: '100%',
  },
  marginBottom: {
    marginBottom: '5rem',
  },
}));
