import React from 'react';
import {Avatar, Button, Grid, TextField, Typography} from "@material-ui/core";
import {useFormik} from "formik";
import {userProfileStyles, CustomTextField} from "./styles";
import {validationUserProfileFormSchema} from "../../Utility/ValidationForms";

const UserProfileForm = () =>{
    const classes = userProfileStyles();

    const formik = useFormik({
        initialValues: {
            fullName:'',
            profileImage:'',
        },
        validationSchema: validationUserProfileFormSchema,
        validateOnChange: true,
        // validateOnMount: true,
        onSubmit: (values,{resetForm}) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        },
        onReset: (values, { resetForm }) => resetForm(),
    });
    return(
            <Grid item md={12} className={classes.userProfile}>
                <Typography variant="h5">User Profile</Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form}>
                    <CustomTextField variant="outlined"
                                     fullWidth
                                     label="Full Name"
                                     className={classes.div}
                                     id="fullName"
                                     name="fullName"
                                     value={formik.values.fullName}
                                     onChange={formik.handleChange}
                                     onBlur={formik.handleBlur}
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
                                     onBlur={formik.handleBlur}
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