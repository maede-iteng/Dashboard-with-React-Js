import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import FormComponent from '../component/upload/FormComponent';
const Upload = () =>{
    return(
        <React.Fragment>
            <Grid container alignItems="center" className="home">
                <Grid md={6} xs={12} item>
                    <Typography variant="h4" className="primary__textColor">Upload</Typography>
                    <Typography className="secondary-textColor">Welcome to Edunet Upload page</Typography>
                </Grid>
                <Grid md={6} xs={12} item className="primary__textColor link">
                    <Link to="/">Home</Link>
                    <ArrowForwardIosOutlinedIcon fontSize="small"/>
                    <Link to="/upload">upload</Link>
                </Grid>
            </Grid>
            <FormComponent/>
        </React.Fragment>
    )
}
export default Upload;