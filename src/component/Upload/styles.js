import {makeStyles, styled} from "@material-ui/styles";
import {TextField} from "@material-ui/core";

export const uploadStyles = makeStyles(theme => ({
    formContainer:{
        backgroundColor:theme.palette.primary.main,
        borderRadius:'5px',
        marginTop:'2rem',
        marginBottom:'5rem'
    },
    formWrapper:{
        width:'700px',
        maxWidth:'100%',
        margin:'0 auto',
        padding:'2rem'
    },
    label:{
      color:theme.palette.primary.contrastText,
    },
    div:{
        "& .MuiInputBase-input":{
            color:theme.palette.primary.contrastText,
        },
        "& .MuiFormLabel-root":{
            color:theme.palette.primary.contrastText,
        }
    },
    divider:{
        '&.MuiDivider-root':{
            backgroundColor:theme.palette.secondary.light,
            marginTop:'.5rem',
            marginBottom:'.5rem',
        },
    },
    submitButton:{
        backgroundColor:theme.palette.secondary.btnColor,
        color:theme.palette.primary.contrastText,
        marginRight:'1rem',
        '&.MuiButton-contained:hover':{
            backgroundColor:"green"
        }
    },
    cancelButton:{
        backgroundColor:theme.palette.secondary.error,
        color:theme.palette.primary.contrastText,
         '&.MuiButton-contained:hover':{
             backgroundColor:'red'
        }
    },

}));

export const CustomTextField = styled(TextField)({
    marginTop:'1rem',
    marginBottom:'1rem',
    '& .MuiInputBase-input': {
        backgroundColor:'rgba(116,132,157,.2)',
        '& .MuiSelect-root':{
            '& .MuiMenu-paper':{
                backgroundColor:'red'
            }
        }
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
        '&.Mui-error fieldset ':{
            borderColor: '#DF3E34',
        },
    },

});