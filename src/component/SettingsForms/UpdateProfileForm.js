import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import { updateProfileStyles, CustomTextField } from './styles';
import { validationUpdateProfileFormSchema } from '../../utility/ValidationForms';

const UpdateProfileForm = () => {
  const classes = updateProfileStyles();

  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema: validationUpdateProfileFormSchema,
    validateOnChange: true,
    // validateOnMount: true,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    onReset: (values, { resetForm }) => resetForm(),
  });
  return (
    <React.Fragment>
      <Grid item md={12} className={classes.userProfile}>
        <Typography variant="h5">Update Profile</Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <CustomTextField
            variant="outlined"
            fullWidth
            label="Email"
            className={classes.div}
            id="Email"
            name="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helperText={formik.touched.Email && formik.errors.Email}
          />
          <CustomTextField
            variant="outlined"
            type="password"
            fullWidth
            label="Password"
            className={classes.div}
            id="Password"
            name="Password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Password && Boolean(formik.errors.Password)}
            helperText={formik.touched.Password && formik.errors.Password}
          />

          <Button variant="contained" type="submit" className={classes.submitButton}>
            Save
          </Button>
        </form>
      </Grid>
    </React.Fragment>
  );
};
export default UpdateProfileForm;
