import {Grid, LinearProgress, Typography} from "@material-ui/core";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import {IoLayersOutline} from "react-icons/io5";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme =>({
        card:{
            width:'400px',
            // height:'200px',
            backgroundColor:'#252529',
            borderRadius:'5px',
            padding:'1rem',
            marginTop:'1rem'
        },
        div:{
            '&.MuiLinearProgress-colorPrimary':{
                backgroundColor: '#ffffff',
                height:'5px',
                borderRadius:'5px'
            },
            '& .MuiLinearProgress-barColorPrimary':{
                backgroundColor:'#04C9B7'
            }
        },
        icon:{
            fontSize:'2rem',
        },
        iconBox:{
            backgroundColor:'#04C9B7',
            margin:'1rem',
            borderRadius:'5px'
        }
    })
);
const Card = () =>{
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 60) {
                    return 60;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 60);
            });
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return(
        <Grid container
              className="home__widget"
              justifyContent="space-between"
              alignItems="center"
        >
            <Grid item sm={12} md={3} lg={3} className={classes.card}>
                <Grid container spacing={3} className="home__Box">
                    <Grid item className={classes.iconBox}>
                        <GroupOutlinedIcon className={classes.icon}/>
                    </Grid>
                    <Grid item>
                        <Typography>Total Student</Typography>
                        <Typography className={classes.fontSize}>3055</Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.typography}>Free: 2240 students </Typography>
                <Typography className={classes.typography}>Paid: 815 Students</Typography>
                <LinearProgress variant="determinate"
                                value={progress}
                                className={classes.div}
                />
            </Grid>
            <Grid item sm={12} md={3} lg={3} className={classes.card}>
                <Grid container spacing={3} className="home__Box">
                    <Grid item className={classes.iconBox}>
                        <AddCircleOutlineOutlinedIcon className={classes.icon}/>
                    </Grid>
                    <Grid item>
                        <Typography>New Students</Typography>
                        <Typography className={classes.fontSize}>1032</Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.typography}>Free: 909 students </Typography>
                <Typography className={classes.typography}>Paid: 123 Students</Typography>
                <LinearProgress variant="determinate"
                                value={progress}
                                className={classes.div}
                />
            </Grid>
            <Grid item sm={12} md={3} lg={3} className={classes.card}>
                <Grid container spacing={3} className="home__Box">
                    <Grid item className={classes.iconBox}>
                        <IoLayersOutline className={classes.icon}/>
                    </Grid>
                    <Grid item>
                        <Typography>Total Courses</Typography>
                        <Typography className={classes.fontSize}>139</Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.typography}>Free: 83 students </Typography>
                <Typography className={classes.typography}>Paid: 26 Students</Typography>
                <LinearProgress variant="determinate"
                                value={progress}
                                className={classes.div}
                />
            </Grid>
        </Grid>
    )
}
export default Card;