import {Box, Button, Divider, Grid, Typography} from "@material-ui/core";
import {Bar} from "react-chartjs-2";
import {data, options} from "../charts/verticalChart";
import {notificationData} from "../../assets/dummyDate";
import React from "react";
import '../../styles/main.css';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme =>({
        iconBox:{
            backgroundColor:'#04C9B7',
            margin:'1rem',
            borderRadius:'5px'
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
            backgroundColor:'#252529',
            borderRadius:'5px',
            padding:'1.8rem',
            marginTop:'1rem',
            // height:'100%',
            position:'relative',
            margin:'auto',
            height:'400px',
            width:'100%',
        },
        notifIcon:{
            width:'25px',
            color:' #74849D',
        },
        textAlign:{
            textAlign:'right'
        },
        divider:{
            '&.MuiDivider-root':{
                backgroundColor:'#74849D',
                marginTop:'.5rem',
                marginBottom:'.5rem',
            },
            '&.MuiDivider-root:last-child':{
                display:'none'
            }
        },
        imgWrapper:{
            width:'30px',
            height:'30px',
            borderRadius:'50%',
            backgroundColor:'#04C9B7',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
)
const FirstWidget = () =>{
    const classes = useStyles();
    return(
            <Grid container justifyContent="space-between" spacing={2}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.chartContainer}>
                        <Bar options={options} data={data} />
                    </Box>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.box}>
                        <Grid container justifyContent='space-between'>
                            <Grid item>
                                <Typography variant="h5" className='primary__textColor'>Recent Notification</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color='secondary'>view all</Button>
                            </Grid>
                        </Grid>
                        <Box className='notification__section'>
                            {
                                notificationData.map(notification =>{
                                    return(
                                        <React.Fragment>
                                            <Grid container spacing={2} justifyContent='space-between' alignItems='center'>
                                                <Grid item lg={1} md={1} sm={1} xs={2}>
                                                    <div className={classes.imgWrapper}>
                                                        <img src={notification.icon} alt="icon" className={classes.notifIcon}/>
                                                    </div>
                                                </Grid>
                                                <Grid item lg={6} md={6} sm={8} xs={7}>
                                                    <Typography className='primary__textColor'>{notification.message}</Typography>
                                                    <Typography className='primary__textColor'>{notification.date}</Typography>
                                                </Grid>
                                                <Grid item lg={5} md={4} sm={2} xs={3} className={classes.textAlign}>
                                                    <Typography color='secondary'>{notification.duration}</Typography>
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
export default FirstWidget;