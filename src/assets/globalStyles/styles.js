import {createTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

export const theme = createTheme({
    palette:{
        primary:{
            darker:'#1C1C1F',
            main:'#252529' ,
            contrastText:"#ffffff",
            grayText:'#a9a9a9'
        },
        secondary:{
            main:'#04C9B7',
            light:'#74849D',
            error:'#DF3E34',
            btnColor:'#66BB6A'
        }
    },
    typography:{
        body1:{
            color:'#a9a9a9',
            marginTop:'.3rem'
        },
        body2:{
            color:'#ffffff'
        },
        h6:{
            color:'#ffffff',
            marginTop:'.8rem'
        },
        h5:{
            color:'#ffffff'
        },
        h4:{
            color:'#ffffff'
        },
        subtitle1:{
            color:'#ffffff'
        },
        subtitle2:{
            color:'#a9a9a9',
        }
    },
});

export const useStyle = makeStyles(theme => ({
    wrapper:{
        ['@media (max-width:959px)']:{
            flexDirection:'column-reverse'
        }
    }
}))