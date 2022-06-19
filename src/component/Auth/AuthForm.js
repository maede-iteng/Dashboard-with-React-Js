import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { Button, Box, Typography, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';
import { CustomTextField, useStyles } from './styles';
import { validationAuthFormSchema } from '../../utility/ValidationForms';

const AuthForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState('');
  const authCtx = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      password: '',
      email: '',
    },
    validationSchema: validationAuthFormSchema,
    validateOnChange: true,
    // validateOnMount: true,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setIsLoading(true);
      if (isLogin) {
        axios
          .post('http://localhost:1337/api/auth/local', {
            identifier: values.email,
            password: values.password,
          })
          .catch((error) => {
            // Handle error.
            console.log('An error occurred:', error.response);
          });
      } else {
        axios
          .post(
            'http://localhost:1337/api/auth/local/register',
            {
              username: values.fullName,
              email: values.email,
              password: values.password,
            },
            {
              statusCode: 400,
              error: 'Bad Request',
              message: [
                {
                  messages: [
                    {
                      id: 'Auth.form.error.email.taken',
                      message: 'Email already taken',
                    },
                  ],
                },
              ],
              data: [
                {
                  messages: [
                    {
                      id: 'Auth.form.error.email.taken',
                      message: 'Email already taken',
                    },
                  ],
                },
              ],
            }
          )
          .then((response) => {
            setIsLoading(false);
            console.log(response.data.username);
            authCtx.login(response.data.jwt);
            history.replace('/home');
          })
          .catch((error) => {
            console.log('An error occurred:', error.response);
            setShowError(error.response.data.error.message);
          });
      }
    },
  });
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <Box className={classes.formWrapper}>
        <h1 className={classes.header}>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            variant="outlined"
            fullWidth
            label="Enter Your FullName"
            className={classes.inputTextColor}
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <CustomTextField
            variant="outlined"
            fullWidth
            label="Enter Your Email"
            className={classes.inputTextColor}
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <CustomTextField
            variant="outlined"
            fullWidth
            label="Enter Your Password"
            className={classes.inputTextColor}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          {isLoading && !showError ? (
            <Box className={classes.circularProgressWrapper}>
              <CircularProgress />
            </Box>
          ) : (
            <Typography variant="body1" className={classes.typography}>
              {showError}
            </Typography>
          )}

          <Button
            variant="contained"
            type="submit"
            onClick={switchAuthModeHandler}
            className={classes.submitButton}
          >
            Create new account
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
};
export default AuthForm;
