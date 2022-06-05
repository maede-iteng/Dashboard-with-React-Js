import {makeStyles} from "@material-ui/styles";

 export const profileStyles = makeStyles(theme => ({
    div:{
        "& .MuiInputBase-input":{
            color: theme.palette.primary.contrastText,
        },
        "& .MuiFormLabel-root":{
            color:theme.palette.primary.contrastText,
        }
    },
    submitButton:{
        backgroundColor:'#66BB6A',
        color:theme.palette.primary.contrastText,
        marginRight:'1rem',
        '&.MuiButton-contained:hover':{
            backgroundColor:"green"
        }
    },
    userInformation:{
        gap:"3rem",
        marginTop:"6rem",
        float: "right",
        width: "calc(100% - 250px)",
        ['@media (max-width:600px)']:{
            marginTop:'17rem',
            width:'100%'
        },
    },
    userProfile:{
        backgroundColor:theme.palette.primary.main,
        padding:"1rem",
        borderRadius:"5px",
        flex:1
    },
    form:{
        marginTop:"1rem"
    },
    avatar:{
        '&.MuiAvatar-root':{
            width:'60px',
            height:'60px',
            // display:'inline-flex'
        }
    },
    avatarContainer:{
        gap:"1rem"
    },
    typography:{
        color:theme.palette.primary.contrastText,
    },
    personalInformation:{
        backgroundColor:theme.palette.primary.main,
        padding:"1rem",
        borderRadius:"5px",
    },
    inputContainer:{
        flex:1,
    }

}));
 export const settingsStyles = makeStyles(theme =>({
     box:{
         width:'300px'
     },
     tabs:{
         '&.MuiTabs-root':{
             position:'absolute',
             top:'250px',
             ['@media (max-width:600px)']:{
                 top:'60%',
                 left:'37%',
                 transform:'translate(-50% , -50%)',
                 width:'60%',
                 '& .PrivateTabIndicator-vertical-28':{
                     display:'none',
                 }
             },
         },
         '& .MuiTab-wrapper':{
             color:theme.palette.primary.contrastText
         },
         '& .MuiTab-root':{
             backgroundColor:theme.palette.secondary.main,
             margin:'.5rem',
             borderRadius:'5px'
         }
     },
 }));