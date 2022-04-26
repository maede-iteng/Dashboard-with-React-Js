import React from "react";
import {createTheme,Container, TextField , Grid, Avatar} from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import {makeStyles, styled} from "@material-ui/styles";
import SearchOutlinedIcon from '@material-ui/icons/Search';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import '../styles/main.css';
import {Link} from "react-router-dom";

const CustomTextField = styled(TextField)({
    marginTop:'1rem',
    marginBottom:'1rem',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#74849D',
        },
        '&:hover fieldset': {
            borderColor: '#74849D',
        },
    },
});

const useStyles = makeStyles(theme=>({
    div:{
        "& .MuiInputBase-input":{
            color: "#ffffff",
        },
        "& .MuiFormLabel-root":{
            color:"#ffffff",
        }
    },
    searchIcon:{
        color: "#ffffff",
    },
    bellIcon:{
        color: "#04C9B7"
    }

}))
const TopBar = () =>{
    const classes = useStyles();
    return(
        <header className="header">
            <Grid container alignItems="center">
                <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
                    <CustomTextField
                        variant="outlined"
                        label="Search Here"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon className={classes.searchIcon}/>
                                </InputAdornment>
                            )
                        }}
                        className={`${classes.div} ${"header__input"} `}
                    />
                </Grid>
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                    <NotificationsActiveOutlinedIcon className={classes.bellIcon}/>
                </Grid>
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1} >
                    <Link to="/settings/profile">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
                        ></Avatar>
                </Link>
                </Grid>

            </Grid>
        </header>
    )
}
export default TopBar;