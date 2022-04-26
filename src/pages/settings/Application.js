import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const Application = () =>{
    return(
        <React.Fragment>
            <Grid container alignItems="center" className="home">
                <Grid md={6} xs={12} item>
                    <Typography variant="h4" className="primary__textColor">Application</Typography>
                    <Typography className="secondary-textColor">Welcome to Edunet Application page</Typography>
                </Grid>
                <Grid md={6} xs={12} item className="primary__textColor link">
                    <Link to="/settings">Settings</Link>
                    <ArrowForwardIosOutlinedIcon fontSize="small"/>
                    <Link to="/settings">Application</Link>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Application;