import { makeStyles, styled } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

export const personalInformationStyles = makeStyles((theme) => ({
  div: {
    '& .MuiInputBase-input': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  submitButton: {
    backgroundColor: theme.palette.secondary.btnColor,
    color: theme.palette.primary.contrastText,
    marginRight: '1rem',
    '&.MuiButton-contained:hover': {
      backgroundColor: 'green',
    },
  },
  userInformation: {
    gap: '3rem',
    marginTop: '6rem',
    float: 'right',
    width: 'calc(100% - 250px)',
  },
  userProfile: {
    backgroundColor: theme.palette.primary.main,
    padding: '1rem',
    borderRadius: '5px',
    flex: 1,
  },
  form: {
    marginTop: '1rem',
  },
  avatar: {
    '&.MuiAvatar-root': {
      width: '60px',
      height: '60px',
      // display:'inline-flex'
    },
  },
  avatarContainer: {
    gap: '1rem',
  },
  personalInformation: {
    backgroundColor: theme.palette.primary.main,
    padding: '1rem',
    borderRadius: '5px',
  },
  inputContainer: {
    flex: 1,
  },
}));
export const CustomTextField = styled(TextField)({
  marginTop: '1rem',
  marginBottom: '1rem',
  '& .MuiInputBase-input': {
    backgroundColor: 'rgba(116,132,157,.2)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#74849D',
    },
    '&:hover fieldset': {
      borderColor: '#74849D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#66BB6A',
    },
    '&.Mui-error fieldset ': {
      borderColor: '#DF3E34',
    },
  },
});
export const updateProfileStyles = makeStyles((theme) => ({
  div: {
    '& .MuiInputBase-input': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  submitButton: {
    backgroundColor: theme.palette.secondary.btnColor,
    color: theme.palette.primary.contrastText,
    marginRight: '1rem',
    '&.MuiButton-contained:hover': {
      backgroundColor: 'green',
    },
  },
  userInformation: {
    gap: '3rem',
    marginTop: '6rem',
    float: 'right',
    width: 'calc(100% - 250px)',
  },
  userProfile: {
    backgroundColor: theme.palette.primary.main,
    padding: '1rem',
    borderRadius: '5px',
    ['@media (max-width:600px)']: {
      flex: 'auto',
    },
    ['@media (min-width:600px)']: {
      flex: 'auto',
    },
    ['@media (min-width:960px)']: {
      flex: 'auto',
    },
    ['@media (min-width:1280px)']: {
      flex: 1,
    },
  },
  form: {
    marginTop: '1rem',
  },
  avatar: {
    '&.MuiAvatar-root': {
      width: '60px',
      height: '60px',
      // display:'inline-flex'
    },
  },
  avatarContainer: {
    gap: '1rem',
  },
  personalInformation: {
    backgroundColor: theme.palette.primary.main,
    padding: '1rem',
    borderRadius: '5px',
  },
  inputContainer: {
    flex: 1,
  },
}));
export const userProfileStyles = makeStyles((theme) => ({
  div: {
    '& .MuiInputBase-input': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  submitButton: {
    backgroundColor: theme.palette.secondary.btnColor,
    color: theme.palette.primary.contrastText,
    marginRight: '1rem',
    '&.MuiButton-contained:hover': {
      backgroundColor: 'green',
    },
  },
  userProfile: {
    backgroundColor: theme.palette.primary.main,
    padding: '1rem',
    borderRadius: '5px',
    ['@media (max-width:600px)']: {
      flex: 'auto',
    },
    ['@media (min-width:600px)']: {
      flex: 'auto',
    },
    ['@media (min-width:960px)']: {
      flex: 'auto',
    },
    ['@media (min-width:1280px)']: {
      flex: 1,
    },
  },
  form: {
    marginTop: '1rem',
  },
  avatar: {
    '&.MuiAvatar-root': {
      width: '60px',
      height: '60px',
      // display:'inline-flex'
    },
  },
  avatarContainer: {
    gap: '1rem',
  },
}));
