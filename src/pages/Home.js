import React from 'react';
import '../styles/main.css';
import {Grid , Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import FirstWidget from "../component/Home/FirstWidget";
import SecondWidget from "../component/Home/SecondWidget";
import Card from '../component/Home/Card';
import ThirdWidget from "../component/Home/ThirdWidget";

const Home = () =>{
    return(
        <React.Fragment>
            <Grid container alignItems="center" className="home">
                <Grid md={6} xs={12} item>
                    <Typography variant="h4" className="primary__textColor">Dashboard</Typography>
                    <Typography className="secondary-textColor">Welcome to Edunet Dashboard</Typography>
                </Grid>
                <Grid md={6} xs={12} item className="primary__textColor link">
                    <Link to="/">Home</Link>
                    <ArrowForwardIosOutlinedIcon fontSize="small"/>
                    <Link to="/">Dashboard</Link>
                </Grid>
            </Grid>
            <Card/>
            <FirstWidget/>
            <SecondWidget/>
            <ThirdWidget/>
        </React.Fragment>
    )
}
export default Home;