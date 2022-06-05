import React from 'react';
import {Modal, Box, Typography, Divider, Grid, Button} from '@material-ui/core';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import LineChart from '../Charts/LineChart';
import {analyticsStyles} from "./styles";

const Analytics = () =>{
    const classes = analyticsStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
        <Button onClick={handleOpen} size="small" variant="contained">Analytics</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Grid container justifyContent='space-between'>
                        <Grid item>
                            <Typography id="modal-modal-title" variant="h6" component="div">
                                Course Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button onClick={handleClose} >
                                <CloseOutlinedIcon  />
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider}/>
                    <Typography id="modal-modal-description" component="div">
                        <ul className={classes.modalContent}>
                            <li>
                                <Typography variant='h6' gutterBottom component="div">User</Typography>
                                <Typography variant='h4' gutterBottom component="div">2021</Typography>
                                <Typography component='div'>
                                    <ArrowUpwardOutlinedIcon className={classes.arrowIcon}/>
                                    <span className={classes.rate}>+28.05%</span> vs last week
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='h6' gutterBottom component="div">Session</Typography>
                                <Typography variant='h4' gutterBottom component="div">1350</Typography>
                                <Typography component='div'>
                                    <ArrowUpwardOutlinedIcon className={classes.arrowIcon}/>
                                    <span className={classes.rate}>+31.39%</span> vs last week
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='h6' gutterBottom component="div">Session Duration (avg)</Typography>
                                <Typography variant='h4' gutterBottom component="div">1050</Typography>
                                <Typography component='div'>
                                    <ArrowUpwardOutlinedIcon className={classes.arrowIcon}/>
                                    <span className={classes.rate}>07.19%</span> vs last week
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='h6' gutterBottom component="div">Bounce Rate</Typography>
                                <Typography variant='h4' gutterBottom component="div">787</Typography>
                                <Typography component='div'>
                                    <ArrowUpwardOutlinedIcon className={classes.arrowIcon}/>
                                    <span className={classes.rate}>13.05%</span> vs last week
                                </Typography>
                            </li>
                        </ul>
                    </Typography>
                    <Box className={classes.chartContainer}>
                        <LineChart/>
                    </Box>

                </Box>
            </Modal>
        </>
    )
}
export default Analytics;