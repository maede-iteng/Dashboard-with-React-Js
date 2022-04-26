import React from 'react';
import {Button, Grid, MenuItem, TextField, Typography} from "@material-ui/core";
import {useFormik} from "formik";
import * as yup from "yup";
import {makeStyles, styled} from "@material-ui/styles";

const validationSchema = yup.object({
    fullName: yup
        .string('Enter your Full Name')
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Full Name is required"),
    Email:yup
        .string('Enter your Email')
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Email is required"),
    Address:yup
        .string('Enter your Address')
        .required('Address is required'),
    City:yup
        .string('Enter your City')
        .required('City is required'),
    PostCode:yup
        .string('Enter your Post Code')
        .required('Post Code is required'),
    Country:yup
        .string('Enter your Country')
        .required('Country is required'),
});
const CustomTextField = styled(TextField)({
    marginTop:'1rem',
    marginBottom:'1rem',
    '& .MuiInputBase-input': {
        backgroundColor:'rgba(116,132,157,.2)'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#74849D',
        },
        '&:hover fieldset': {
            borderColor: '#74849D',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#66BB6A',
        },
    },
});
const useStyles = makeStyles(theme => ({
    div:{
        "& .MuiInputBase-input":{
            color: "#ffffff",
        },
        "& .MuiFormLabel-root":{
            color:"#ffffff",
        }
    },
    submitButton:{
        backgroundColor:'#66BB6A',
        color:'#ffffff',
        marginRight:'1rem',
        '&.MuiButton-contained:hover':{
            backgroundColor:"green"
        }
    },
    userInformation:{
        gap:"3rem",
        marginTop:"6rem",
        float: "right",
        width: "calc(100% - 250px)",
    },
    userProfile:{
        backgroundColor:"#252529",
        padding:"1rem",
        borderRadius:"5px",
        flex:1
    },
    form:{
        marginTop:"1rem"
    },
    avatar:{
        '&.MuiAvatar-root':{
            width:'60px',
            height:'60px',
            // display:'inline-flex'
        }
    },
    avatarContainer:{
        gap:"1rem"
    },
    typography:{
        color:"#ffffff",
    },
    personalInformation:{
        backgroundColor:"#252529",
        padding:"1rem",
        borderRadius:"5px",
    },
    inputContainer:{
        flex:1,
    }

}));
const PersonalInformationForm = () =>{
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            fullName:'',
            Email:'',
            Address:'',
            City:'',
            PostCode:'',
            Country:''
        },
        validationSchema: validationSchema,
        validateOnChange: true,
        // validateOnMount: true,
        onSubmit: (values,{resetForm}) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        },
        onReset: (values, { resetForm }) => resetForm(),
    });
    return(
        <Grid container className={classes.personalInformation}>
            <Typography variant="h5" className={classes.typography}>Personal Information</Typography>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
                <Grid container>
                    <Grid container spacing={3}>
                        <Grid item className={classes.inputContainer}>
                            <CustomTextField variant="outlined"
                                             fullWidth
                                             label="Full Name"
                                             className={classes.div}
                                             id="fullName"
                                             name="fullName"
                                             value={formik.values.fullName}
                                             onChange={formik.handleChange}
                                             error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                             helperText={formik.touched.fullName && formik.errors.fullName}
                            />
                        </Grid>
                        <Grid item className={classes.inputContainer}>
                            <CustomTextField variant="outlined"
                                             fullWidth
                                             label="Email"
                                             className={classes.div}
                                             id="Email"
                                             name="Email"
                                             value={formik.values.Email}
                                             onChange={formik.handleChange}
                                             error={formik.touched.Email && Boolean(formik.errors.Email)}
                                             helperText={formik.touched.Email && formik.errors.Email}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item className={classes.inputContainer}>
                            <CustomTextField variant="outlined"
                                             fullWidth
                                             label="Address"
                                             className={classes.div}
                                             id="Address"
                                             name="Address"
                                             value={formik.values.Address}
                                             onChange={formik.handleChange}
                                             error={formik.touched.Address && Boolean(formik.errors.Address)}
                                             helperText={formik.touched.Address && formik.errors.Address}
                            />
                        </Grid>
                        <Grid item className={classes.inputContainer}>
                            <CustomTextField variant="outlined"
                                             fullWidth
                                             label="City"
                                             className={classes.div}
                                             id="City"
                                             name="City"
                                             value={formik.values.City}
                                             onChange={formik.handleChange}
                                             error={formik.touched.City && Boolean(formik.errors.City)}
                                             helperText={formik.touched.City && formik.errors.City}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item className={classes.inputContainer}>
                            <CustomTextField variant="outlined"
                                             fullWidth
                                             label="Post Code"
                                             className={classes.div}
                                             id="PostCode"
                                             name="PostCode"
                                             value={formik.values.PostCode}
                                             onChange={formik.handleChange}
                                             error={formik.touched.PostCode && Boolean(formik.errors.PostCode)}
                                             helperText={formik.touched.PostCode && formik.errors.PostCode}
                            />
                        </Grid>
                        <Grid item className={classes.inputContainer}>
                            <CustomTextField variant="outlined"
                                             fullWidth
                                             label="Country"
                                             className={classes.div}
                                             id="Country"
                                             name="Country"
                                             select
                                             value={formik.values.Country}
                                             onChange={formik.handleChange}
                                             error={formik.touched.Country && Boolean(formik.errors.Country)}
                                             helperText={formik.touched.Country && formik.errors.Country}
                            >
                                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                                <MenuItem value="UnitedStates">United States</MenuItem>
                                <MenuItem value="UnitedKingdom">United Kingdom</MenuItem>
                            </CustomTextField>
                        </Grid>
                    </Grid>
                    <Button variant="contained"
                            type="submit"
                            className={classes.submitButton}
                    >
                        Save
                    </Button>
                </Grid>
            </form>

        </Grid>
    )
}
export default PersonalInformationForm;