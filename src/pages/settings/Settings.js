import React, {useState} from 'react';
import {Grid, Typography, Tab, Tabs, Box} from "@material-ui/core";
import Profile from './Profile';
import Application from "./Application";
import PaymentMethod from "./PaymentMethod";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme =>({
    box:{
        width:'300px'
    },
    tabs:{
        '&.MuiTabs-root':{
            position:'absolute',
            top:'250px'
        },
        '& .MuiTab-wrapper':{
            color:'#ffffff'
        },
        '& .MuiTab-root':{
            backgroundColor:'#04C9B7',
            margin:'.5rem',
            borderRadius:'5px'
        }
    },
}));

const Settings = (props) =>{
    const { match , history } = props;
    const { params } = match;
    const { page } = params;
    const classes = useStyles();
    const indexToTabName = {
        profile:0,
        application:1,
        paymentMethod:2
    };
    const tabNameToIndex = {
        0: "profile",
        1: "application",
        2: "paymentMethod"
    };

    const [selectedTab , setSelectedTab] = useState(indexToTabName[page]);
    const handleChange = (event, newValue) => {
        history.push(`/settings/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };
    return(
        <React.Fragment>
            <Box className={classes.box}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={selectedTab}
                    onChange={handleChange}
                    aria-label="Vertical tabs"
                    className={classes.tabs}
                >
                    <Tab label="Profile"  />
                    <Tab label="Application"  />
                    <Tab label="Payment Method"  />
                </Tabs>
            </Box>
            {selectedTab === 0 && <Profile />}
            {selectedTab === 1 && <Application />}
            {selectedTab === 2 && <PaymentMethod />}
        </React.Fragment>
    )
}
export default Settings;
