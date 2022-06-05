import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles(theme =>({
    CircularProgressWrapper:{
        position: 'relative',
        display: 'inline-flex',
        ['@media (max-width:500px)']:{
            display:'none'
        }
    },
    valueOfCircularProgress:{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:theme.palette.primary.contrastText,
    },
    circularProgress:{
        '&.MuiCircularProgress-colorPrimary':{
            color:theme.palette.secondary.main,
        }
    }
}));