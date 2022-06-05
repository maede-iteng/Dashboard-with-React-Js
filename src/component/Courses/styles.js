import {makeStyles} from "@material-ui/styles";

export const analyticsStyles = makeStyles(theme=>({
    modal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.palette.primary.main,
        color:theme.palette.primary.contrastText,
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius:'5px',
        padding: '1rem',
        maxHeight:'calc(100% - 20px)',
        overflowY:'auto',
        '& .MuiSvgIcon-root':{
            color:theme.palette.primary.contrastText
        },
        ['@media (max-width:600px)']:{
            width: "75%",
        },
        ['@media (min-width:600px)']:{
            width: "75%",
        },
        ['@media (min-width:960px)']:{
            width: '85%',
        },
        ['@media (min-width:1280px)']:{
            width:'90%',
        },
    },
    divider: {
        '&.MuiDivider-root': {
            backgroundColor: theme.palette.secondary.light,
            marginTop: '.5rem',
            marginBottom: '.5rem',
        }
    },
    modalContent:{
        display: 'flex',
        justifyContent: 'space-between',
        '& li':{
            display:'inline-block',
            padding:'1rem',
            borderRight:'1px solid #74849D ',
            '&:last-child':{
                borderRight:'none',
            }
        }
    },
    arrowIcon:{
        transform:'rotate(45deg)',
        backgroundColor:theme.palette.secondary.main,
        borderRadius:'50px',
        marginRight:'8px',
    },
    rate:{
        color:theme.palette.secondary.main
    },
    chartContainer:{
        height:'300px',
        width:'600px',
        margin:'auto',
        ['@media (max-width:600px)']:{
            height:'200px',
            width:'400px',
        },
        ['@media (min-width:600px)']:{
            height:'200px',
            width:'400px',
        },
        ['@media (min-width:960px)']:{
            height:'300px',
            width:'600px',
        },
        ['@media (min-width:1280px)']:{
            height:'300px',
            width:'600px',
        },
    }
}));
export const contentStyles = makeStyles(theme=>({
    coursesContainer:{
        // width:'calc(100% - 350px)',
        marginTop:'2rem',
        marginBottom:'2rem'
    },
    card:{
        margin:'10px',
        '&.MuiPaper-root':{
            color:theme.palette.primary.contrastText,
            backgroundColor:theme.palette.primary.main,
        },
        '& .MuiCardContent-root':{
            height:'180px'
        }
    },
    cardWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        rowGap: '20px',
    },
    editBtn:{
        backgroundColor:theme.palette.secondary.btnColor,
        '&.MuiButton-contained:hover':{
            backgroundColor:"green"
        }
    },
    typography:{
        color:theme.palette.primary.contrastText,
    },
    typeOfGroup:{
        backgroundColor:theme.palette.primary.main,
        marginTop:'1rem',
        marginBottom:'1rem',
        padding:'5px',
        borderRadius:'5px',
        flex:1
    },
    logo:{
        width:'60px',
    },
    textAlign:{
        textAlign:'right',
        color:theme.palette.secondary.main,
    }
}));
export const reviewScoresStyles = makeStyles(theme=>({
    modal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.palette.primary.main,
        color:theme.palette.primary.contrastText,
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius:'5px',
        padding: '1rem',
        maxHeight:'calc(100% - 10px)',
        overflowY:'auto',
        '& .MuiRating-iconEmpty':{
           color: theme.palette.primary.contrastText
        },
        ['@media (max-width:600px)']:{
            width: "65%",
        },
        ['@media (min-width:600px)']:{
            width: "65%",
        },
        ['@media (min-width:960px)']:{
            width: '75%',
        },
        ['@media (min-width:1280px)']:{
            width:'80%',
        },
    },
    closeIcon:{
        '&.MuiSvgIcon-root':{
            color:theme.palette.primary.contrastText
        },
    },
    textAlign:{
        textAlign:'right'
    },
    divider: {
        '&.MuiDivider-root': {
            backgroundColor: theme.palette.secondary.light,
            marginTop: '.5rem',
            marginBottom: '.5rem',
        }
    },
    modalContent:{
        marginTop:'2rem',
        ['@media (min-width:600px)']:{
            justifyContent:'space-around'
        },
    },
    div:{
        marginBottom:'20px',
        '&.MuiLinearProgress-colorPrimary':{
            backgroundColor: theme.palette.primary.contrastText,
            height:'8px',
            borderRadius:'5px'
        },
        '& .MuiLinearProgress-barColorPrimary':{
            backgroundColor:'#FFB400'
        }
    },
    textRate:{
        textAlign:'center'
    },
    progressContainer:{
        width:'60%',
        ['@media (min-width:600px)']:{
            marginTop:'1rem'
        },
        ['@media (max-width:600px)']:{
            marginTop:'1rem'
        },
    },
    ratingContainer:{
        display:'inline-grid',
        '& .MuiRating-root':{
            fontSize:'1.2rem'
        },
        ['@media (min-width:600px)']:{
            marginTop:'1rem'
        },
        ['@media (max-width:600px)']:{
            marginTop:'1rem'
        },
    }
}));