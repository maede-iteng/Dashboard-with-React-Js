import { makeStyles, styled } from '@material-ui/styles';
import { TableCell, TableContainer, TableRow } from '@material-ui/core';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  '&.MuiPaper-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: '1rem',
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
}));
export const useStyles = makeStyles((theme) => ({
  receiptIcon: {
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  table: {
    minWidth: 700,
  },
}));
