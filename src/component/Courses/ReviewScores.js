import React, {useState} from 'react';
import {Box, Button, Divider, Grid, LinearProgress,Modal, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import {reviewScoresStyles} from "./styles";


const ReviewScores = () =>{
    const classes = reviewScoresStyles();
    const [progress, setProgress] = useState({
        value:[60,30,20,10,5]
    });
    const [value, setValue] = useState({
        rate:[4,3,2,1]
    });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <React.Fragment>
            <Button onClick={handleOpen} size="small" variant="contained">Review</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Grid container justifyContent='space-between'>
                        <Grid item xs={8}>
                            <Typography id="modal-modal-title" variant="h6" component="div">
                                Reviews on this course
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.textAlign}>
                            <Button onClick={handleClose}>
                                <CloseOutlinedIcon className={classes.closeIcon} />
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider}/>
                    <Grid container justifyContent='space-between' className={classes.modalContent}>
                        <Grid xl={2} lg={2} md={2} sm={12} xs={12} item className={classes.textRate} >
                            <Typography variant='h3'>4.8</Typography>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        </Grid>
                        <Grid xl={6} lg={6} md={6} sm={8} xs={7} item className={classes.progressContainer}>
                            <LinearProgress variant="determinate"
                                                value={progress.value[0]}
                                                className={classes.div}
                            />
                            <LinearProgress variant="determinate"
                                            value={progress.value[1]}
                                            className={classes.div}
                            />
                            <LinearProgress variant="determinate"
                                            value={progress.value[2]}
                                            className={classes.div}
                            />
                            <LinearProgress variant="determinate"
                                            value={progress.value[3]}
                                            className={classes.div}
                            />
                            <LinearProgress variant="determinate"
                                            value={progress.value[4]}
                                            className={classes.div}
                            />
                        </Grid>
                        <Grid xl={2} lg={2} md={2} sm={3} xs={4} item className={classes.ratingContainer}>
                            <Rating name="read-only"  value={value.rate[0]} readOnly />
                            <Rating name="read-only"  value={value.rate[1]} readOnly />
                            <Rating name="read-only"  value={value.rate[2]} readOnly />
                            <Rating name="read-only"  value={value.rate[3]} readOnly />
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
        </React.Fragment>
    )
}
export default ReviewScores;