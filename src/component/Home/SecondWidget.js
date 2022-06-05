import {Box, Divider, Grid, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {Doughnut} from "react-chartjs-2";
import {data , options} from "../Charts/doughnutChart";
import {studentQueries} from "../../assets/dummyDate";
import React from "react";
import {secondWidgetStyles} from "./styles";

const SecondWidget = () =>{
    const classes = secondWidgetStyles();
    return(
        <Grid container justifyContent='space-between' spacing={2} className='margin__top'>
            <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <Box className={classes.chartContainer}>
                    <Typography variant="h5">Total Sales</Typography>
                    <Doughnut options={options} data={data} style={{padding:'1rem'}}/>
                </Box>
            </Grid>
            <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                <Box className={classes.box}>
                    <Grid container justifyContent='space-between'>
                        <Grid item>
                            <Typography variant="h5">Student Queries</Typography>
                        </Grid>
                    </Grid>
                <Box className={classes.studentQueries}>
                    {
                        studentQueries.map(query =>{
                            return(
                                <React.Fragment key={query.id}>
                                    <Grid container spacing={2} justifyContent='space-between' alignItems='center'>
                                        <Grid item  className={classes.avatarWrapper}>
                                            <img src={query.avatar} alt="icon" className={classes.avatar}/>
                                        </Grid>
                                        <Grid item  className={classes.Queries}>
                                            <Typography variant='subtitle1'>{query.question}</Typography>
                                            <Typography variant='body1'>{query.author}</Typography>
                                        </Grid>
                                        <Grid item  className={classes.btnWrapper}>
                                            <Link to="/">
                                                <Box className={classes.checkIcon}>
                                                    <img src={query.checkIcon} alt="checkIcon" className={classes.icon}/>
                                                </Box>
                                            </Link>
                                            <Link to="/">
                                                <Box className={classes.closeIcon}>
                                                    <img src={query.closeIcon} alt="closeIcon" className={classes.icon}/>
                                                </Box>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Divider className={classes.divider}/>
                                </React.Fragment>
                            )
                        })
                    }
                </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
export default SecondWidget;