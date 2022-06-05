import React from 'react';
import {Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core';
import {courses} from "../../assets/dummyDate";
import {useHistory} from "react-router-dom";
import Analytics from "./Analytics";
import ReviewScores from "./ReviewScores";
import {groupDiscussions} from '../../assets/dummyDate';
import {contentStyles} from "./styles";

const Content = () =>{
    const classes = contentStyles();
    const history = useHistory();

    return(
        <React.Fragment>
            <Grid container className={classes.coursesContainer} justifyContent='space-between' spacing={2}>
                <Grid item container xl={7} lg={8} md={12} sm={12} xs={12} className={classes.cardWrapper}>
                    {courses.map(course =>{
                        return(
                            <Grid item xl={6} lg={6} md={6} key={course.id}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={course.courseThumbnail}
                                        alt={course.title}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {course.title}
                                            </Typography>
                                        <Typography variant="body2">
                                            {course.description}
                                        </Typography>
                                    </CardContent>
                                        <CardActions>
                                            <Button size="small"
                                                    variant="contained"
                                                    className={classes.editBtn}
                                                    onClick={() => {
                                                        history.replace('/Upload')
                                                    }}
                                            >
                                                Edit
                                            </Button>
                                            <Analytics/>
                                            <ReviewScores/>
                                        </CardActions>
                                 </Card>
                            </Grid>
                        )
                    })}

                </Grid>
                <Grid item xl={5} lg={4} md={12} sm={12} xs={12} className={classes.marginBottom}>
                    <Typography variant='h5' className={classes.typography}>Group Discussions</Typography>
                            {groupDiscussions.map(item => {
                                return (
                                    <Grid key={item.name}
                                          className={classes.typeOfGroup}
                                          container
                                          justifyContent='space-between'
                                          alignItems='center'
                                    >
                                        <Grid xl={2} lg={2} md={1} sm={1} xs={2} item>
                                            <img src={item.logo} alt={item.name} className={classes.logo}/>
                                        </Grid>
                                        <Grid xl={8} lg={7} md={9} sm={8} xs={7} item>
                                            <Grid>
                                                <Typography variant='body1'>
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography variant='body2'>
                                                    {item.title}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid xl={2} lg={2} md={2} sm={2} xs={2} item>
                                            <Typography variant='body1' className={classes.textAlign}>
                                                {item.members}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                            )
                            })}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Content;