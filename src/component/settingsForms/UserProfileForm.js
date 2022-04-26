import React from 'react';
import {Avatar, Button, Grid, TextField, Typography} from "@material-ui/core";
import {useFormik} from "formik";
import * as yup from "yup";
import {makeStyles, styled} from "@material-ui/styles";

const validationSchema = yup.object({
    fullName: yup
        .string('Enter your Full Name')
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Full Name is required"),
    profileImage:yup
        .string('Enter your Profile Image')
        .required('Profile Image is required'),
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

}));

const UserProfileForm = () =>{
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            fullName:'',
            profileImage:'',
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
            <Grid item className={classes.userProfile}>
                <Typography variant="h5" className={classes.typography}>User Profile</Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form}>
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
                    <Grid container alignItems="center" className={classes.avatarContainer}>
                        <Avatar
                            alt="avatar"
                            className={classes.avatar}
                            src={formik.values.profileImage}
                        ></Avatar>
                        <Typography className={classes.typography}>{formik.values.fullName}</Typography>
                    </Grid>
                    <CustomTextField type="file"
                                     variant="outlined"
                                     accept="image/*"
                                     fullWidth
                                     className={classes.div}
                                     id="profileImage"
                                     name="profileImage"
                                     onChange={formik.handleChange}
                                     error={formik.touched.profileImage && Boolean(formik.errors.profileImage)}
                                     helperText={formik.touched.profileImage && formik.errors.profileImage}
                    />

                    <Button variant="contained"
                            type="submit"
                            className={classes.submitButton}
                    >
                        Save
                    </Button>
                </form>
            </Grid>
    )
}
export default UserProfileForm;