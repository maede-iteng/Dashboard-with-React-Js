import {Box, Button, Divider, Grid, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {balance} from "../../assets/dummyDate";
import React,{useState} from "react";
import {makeStyles} from "@material-ui/styles";
import ReactTooltip from "react-tooltip";
import '../../styles/main.css';
import MapChart from "../charts/MapChart";
const useStyles = makeStyles(theme =>({
        iconBox:{
            backgroundColor:'#04C9B7',
            margin:'1rem',
            borderRadius:'5px'
        },
        arrowIcon:{
            width:'25px',
            color:' #74849D',
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
            height:'400px',
            // height:'100%',
            position:'relative'
        },
        boxContainer:{
            height:'600px',
        },
        balance:{
            backgroundColor:'#252529',
            borderRadius:'5px',
            padding:'1.8rem',
            marginTop:'1rem',
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
        imgWrapper:{
            width:'30px',
            height:'30px',
            borderRadius:'5px',
            backgroundColor:'#04C9B7',
            textAlign:'center',
            float: 'right',
        },
        balanceItem:{
            borderRadius:'5px',
            marginTop:'1rem',
            padding:'1rem',
            backgroundColor:"#74849D",
            boxSizing:'border-box',
            border: '1px solid transparent',
           '&:hover':{
               backgroundColor:"rgba(4, 201, 183, .5)",
               border:'1px dashed #04C9B7',
           }
        }
    })
)
const ThirdWidget = () =>{
    const classes = useStyles();
    const [content, setContent] = useState("");
    return(
        <Box className={classes.boxContainer}>
        <Grid container justifyContent="space-between" spacing={2}>
            <Grid item xl={3} lg={4} md={4} sm={12} xs={12}>
                <Box className={classes.balance}>
                    <Typography variant="h5" className="primary__textColor">Balance</Typography>
                    <Typography className={`${classes.typography} primary__textColor`}>Available Balance</Typography>
                    <Typography variant="h4" className={`${classes.typography} primary__textColor`}>$856,342</Typography>
                    <Box className='balance__item'>
                        {
                            balance.map(item =>{
                                return(
                                    <Link to="/">
                                        <Box className={classes.balanceItem}>
                                            <Grid container
                                                  spacing={3}
                                                  justifyContent='space-between'
                                                  alignItems='center'
                                            >
                                                <Grid item lg={10} md={8} sm={10} xs={7}>
                                                    <Typography>{item.title}</Typography>
                                                    <Typography variant="h6">{item.price}</Typography>
                                                </Grid>
                                                <Grid item lg={2} md={4} sm={2} xs={3}>
                                                    <div className={classes.imgWrapper}>
                                                        <img src={item.arrowIcon} alt="icon" className={classes.arrowIcon}/>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Link>
                                )
                            })
                        }
                    </Box>

                </Box>
            </Grid>
            <Grid item xl={9} lg={8} md={8} sm={12} xs={12}>
                <Box className={classes.box}>
                    <Typography variant="h5" className="primary__textColor">Student Location</Typography>
                    <MapChart setTooltipContent={setContent} />
                    <ReactTooltip>{content}</ReactTooltip>
                </Box>
            </Grid>
        </Grid>
        </Box>
    )
}
export default ThirdWidget;