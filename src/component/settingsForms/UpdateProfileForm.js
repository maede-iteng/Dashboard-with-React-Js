import React from 'react';
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import {useFormik} from "formik";
import * as yup from "yup";
import {makeStyles, styled} from "@material-ui/styles";

const validationSchema = yup.object({
    Email:yup
        .string('Enter your Email')
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Email is required"),
    Password: yup
        .string('Enter your Password')
        .required('Password is required.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
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
const UpdateProfileForm = () =>{
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            Email:'',
            Password:'',
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
        <React.Fragment>
            <Grid item className={classes.userProfile}>
                <Typography variant="h5" className={classes.typography}>Update Profile</Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form}>
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
                    <CustomTextField variant="outlined"
                                     type="password"
                                     fullWidth
                                     label="Password"
                                     className={classes.div}
                                     id="Password"
                                     name="Password"
                                     value={formik.values.Password}
                                     onChange={formik.handleChange}
                                     error={formik.touched.Password && Boolean(formik.errors.Password)}
                                     helperText={formik.touched.Password && formik.errors.Password}
                    />

                    <Button variant="contained"
                            type="submit"
                            className={classes.submitButton}
                    >
                        Save
                    </Button>
                </form>
            </Grid>

        </React.Fragment>
    )
}
export default UpdateProfileForm;