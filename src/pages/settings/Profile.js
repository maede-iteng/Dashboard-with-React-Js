import React from 'react';
import {Grid, Typography, Box, TextField, Avatar, Button, MenuItem} from "@material-ui/core";
import {makeStyles ,styled} from "@material-ui/styles";
import {Link} from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import UserProfileForm from "../../component/settingsForms/UserProfileForm";
import UpdateProfileForm from "../../component/settingsForms/UpdateProfileForm";
import PersonalInformationForm from "../../component/settingsForms/PersonalInformationForm";

const useStyles = makeStyles(theme => ({
    div:{
        "& .MuiInputBase-input":{
            color: "#ffffff",
        },
        "& .MuiFormLabel-root":{
            color:"#ffffff",
        }
    },
    submitButton:{
        backgroundColor:'#66BB6A',
        color:'#ffffff',
        marginRight:'1rem',
        '&.MuiButton-contained:hover':{
            backgroundColor:"green"
        }
    },
    userInformation:{
        // width:"1200px",
        // marginRight:"auto",
        // marginLeft:"auto",
      //   justifyContent:"end"
        gap:"3rem",
        marginTop:"6rem",
        float: "right",
        width: "calc(100% - 250px)",
        // position: "relative",
        // left: "56%",
        /* top: 10%; */
        // transform: "translate(-50% , 30%)",
    },
    userProfile:{
        backgroundColor:"#252529",
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
        color:"#ffffff",
    },
    personalInformation:{
        backgroundColor:"#252529",
        padding:"1rem",
        borderRadius:"5px",
    },
    inputContainer:{
        flex:1,
    }

}));
const Profile = () =>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <Grid container alignItems="center" className="home">
                <Grid md={6} xs={12} item>
                    <Typography variant="h4" className="primary__textColor">Profile</Typography>
                    <Typography className="secondary-textColor">Welcome to Edunet Settings Profile page</Typography>
                </Grid>
                <Grid md={6} xs={12} item className="primary__textColor link">
                    <Link to="/settings">Settings</Link>
                    <ArrowForwardIosOutlinedIcon fontSize="small"/>
                    <Link to="/settings">Profile</Link>
                </Grid>
            </Grid>
            <Grid container className={classes.userInformation}>
                <UserProfileForm/>
                <UpdateProfileForm/>
                <PersonalInformationForm/>
                </Grid>
        </React.Fragment>
    )
}
export default Profile;