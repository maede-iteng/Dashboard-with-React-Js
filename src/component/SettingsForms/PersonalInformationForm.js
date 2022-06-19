import React from 'react';
import { Button, Grid, MenuItem, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import { validationPersonalInformationFormSchema } from '../../utility/ValidationForms';
import { personalInformationStyles, CustomTextField } from './styles';

const PersonalInformationForm = () => {
  const classes = personalInformationStyles();
  // const [isLogin , setIsLogin] = useState(true);
  // const authCtx = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      fullName: '',
      Email: '',
      Address: '',
      City: '',
      PostCode: '',
      Country: '',
    },
    validationSchema: validationPersonalInformationFormSchema,
    validateOnChange: true,
    // validateOnMount: true,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  return (
    <Grid container className={classes.personalInformation}>
      <Typography variant="h5">Personal Information</Typography>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Grid container>
          <Grid container spacing={3}>
            <Grid item className={classes.inputContainer}>
              <CustomTextField
                variant="outlined"
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
            </Grid>
            <Grid item className={classes.inputContainer}>
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
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item className={classes.inputContainer}>
              <CustomTextField
                variant="outlined"
                fullWidth
                label="Address"
                className={classes.div}
                id="Address"
                name="Address"
                value={formik.values.Address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Address && Boolean(formik.errors.Address)}
                helperText={formik.touched.Address && formik.errors.Address}
              />
            </Grid>
            <Grid item className={classes.inputContainer}>
              <CustomTextField
                variant="outlined"
                fullWidth
                label="City"
                className={classes.div}
                id="City"
                name="City"
                value={formik.values.City}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.City && Boolean(formik.errors.City)}
                helperText={formik.touched.City && formik.errors.City}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item className={classes.inputContainer}>
              <CustomTextField
                variant="outlined"
                fullWidth
                label="Post Code"
                className={classes.div}
                id="PostCode"
                name="PostCode"
                value={formik.values.PostCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.PostCode && Boolean(formik.errors.PostCode)}
                helperText={formik.touched.PostCode && formik.errors.PostCode}
              />
            </Grid>
            <Grid item className={classes.inputContainer}>
              <CustomTextField
                variant="outlined"
                fullWidth
                label="Country"
                className={classes.div}
                id="Country"
                name="Country"
                select
                value={formik.values.Country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Country && Boolean(formik.errors.Country)}
                helperText={formik.touched.Country && formik.errors.Country}
              >
                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                <MenuItem value="UnitedStates">United States</MenuItem>
                <MenuItem value="UnitedKingdom">United Kingdom</MenuItem>
              </CustomTextField>
            </Grid>
          </Grid>
          <Button variant="contained" type="submit" className={classes.submitButton}>
            Save
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
export default PersonalInformationForm;
