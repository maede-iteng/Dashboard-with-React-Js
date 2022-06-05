import {makeStyles, styled} from "@material-ui/styles";
import {TextField} from "@material-ui/core";

export const CustomTextField = styled(TextField)({
    marginTop:'1rem',
    marginBottom:'1rem',
    '& .MuiInputBase-input': {
        backgroundColor:'rgba(116,132,157,.2)'
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
    },
});
export const useStyles = makeStyles(theme=>({
    header:{
        color:theme.palette.primary.contrastText,
        display:'grid',
        placeItems:'center'
    },
    formWrapper:{
        width:'450px',
        backgroundColor:theme.palette.primary.main,
        margin:'5rem auto',
        padding:'1rem',
        borderRadius:'5px'
    },
    inputTextColor:{
        "& .MuiInputBase-input":{
            color:theme.palette.primary.contrastText,
        },
        "& .MuiFormLabel-root":{
            color:theme.palette.primary.contrastText,
        }
    },
    submitButton:{
        backgroundColor:theme.palette.secondary.btnColor,
        color:theme.palette.primary.contrastText,
        width:'100%',
        '&.MuiButton-contained:hover':{
            backgroundColor:"green"
        }
    },
    circularProgressWrapper:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'1rem',
        '& .MuiCircularProgress-colorPrimary':{
            color:theme.palette.secondary.main,
        },
    },
    typography:{
        color:theme.palette.secondary.error,
        marginBottom:'.5rem'
    }
}));
