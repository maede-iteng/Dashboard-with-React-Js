import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const Courses = () =>{
    return(
        <React.Fragment>
            <Grid container alignItems="center" className="home">
                <Grid md={6} xs={12} item>
                    <Typography variant="h4" className="primary__textColor">My Courses</Typography>
                    <Typography className="secondary-textColor">Welcome to Edunet My Courses page</Typography>
                </Grid>
                <Grid md={6} xs={12} item className="primary__textColor link">
                    <Link to="/">Home</Link>
                    <ArrowForwardIosOutlinedIcon fontSize="small"/>
                    <Link to="/courses">My Courses</Link>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Courses;