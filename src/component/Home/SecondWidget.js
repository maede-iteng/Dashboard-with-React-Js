import {Box, Divider, Grid, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {Doughnut} from "react-chartjs-2";
import {data , options} from "../charts/doughnutChart";
import {studentQueries} from "../../assets/dummyDate";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme =>({
        icon:{
           width:'25px',
           borderRadius:'50%',
        },
        closeIcon:{
           backgroundColor:'#FCD9E1',
            width:'40px',
            height:'40px',
            margin:'.5rem',
            borderRadius:'50%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'inline-flex'
        },
        checkIcon:{
            backgroundColor:'#D2F7E7',
            width:'40px',
            height:'40px',
            margin:'.5rem',
            borderRadius:'50%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'inline-flex'
        },
        typography:{
            marginTop:'.8rem',
            marginBottom:'.8rem'
        },
        fontSize:{
            fontSize:'1.5rem',
        },
        box:{
            backgroundColor:'#252529',
            borderRadius:'5px',
            padding:'1.8rem',
            marginTop:'1rem',
            height:'400px'
        },
        chartContainer:{
            // position:'relative',
            margin:'auto',
            height:'400px',
            width:'100%',
            backgroundColor:'#252529',
            borderRadius:'5px',
            padding:'1.8rem',
            marginTop:'1rem',
        },
        avatar:{
            width:'50px',
            color:' #74849D',
            borderRadius:'50%',
        },
        textAlign:{
            textAlign:'right'
        },
        divider:{
            '&.MuiDivider-root':{
                backgroundColor:'#74849D',
                marginTop:'1rem',
                marginBottom:'1rem',
            },
            '&.MuiDivider-root:last-child':{
                display:'none'
            }
        },
    })
)
const SecondWidget = () =>{
    const classes = useStyles();
    return(
        <Grid container justifyContent='space-between' spacing={2} className='margin__top'>
            <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <Box className={classes.chartContainer}>
                    <Typography variant="h5" className='primary__textColor'>Total Sales</Typography>
                    <Doughnut options={options} data={data} style={{padding:'1rem'}}/>
                </Box>
            </Grid>
            <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                <Box className={classes.box}>
                    <Grid container justifyContent='space-between'>
                        <Grid item>
                            <Typography variant="h5" className='primary__textColor'>Student Queries</Typography>
                        </Grid>
                    </Grid>
                <Box className='student__queries'>
                    {
                        studentQueries.map(query =>{
                            return(
                                <React.Fragment>
                                    <Grid container spacing={2} justifyContent='space-between' alignItems='center'>
                                        <Grid item xl={1} lg={1} md={2} sm={2} xs={3}>
                                            <img src={query.avatar} alt="icon" className={classes.avatar}/>
                                        </Grid>
                                        <Grid item xl={4} lg={6} md={7} sm={6} xs={5}>
                                            <Typography className='primary__textColor'>{query.question}</Typography>
                                            <Typography className='primary__textColor'>{query.author}</Typography>
                                        </Grid>
                                        <Grid item xl={5} lg={4} md={2} sm={4} xs={4} className={classes.textAlign}>
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