import React from 'react';
import { useFormik } from 'formik';
import { Button, Box, Grid, MenuItem, Divider } from '@material-ui/core';
import { coursesCategory } from '../../assets/dummyDate';
import { uploadStyles, CustomTextField } from './styles';
import { validationFormComponentSchema } from '../../utility/ValidationForms';

const FormComponent = () => {
  const classes = uploadStyles();
  const formik = useFormik({
    initialValues: {
      courseThumbnail: '',
      courseTitle: '',
      courseDescription: '',
      coursePrice: '',
      courseCategory: '',
      courseSubCategory: '',
      courseLevel: '',
      courseFeatures: '',
      learnerAccessibility: '',
      lessonVideo: '',
      videoThumbnail: '',
      lessonName: '',
      lessonDescription: '',
    },
    validationSchema: validationFormComponentSchema,
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
      <Box className={classes.formContainer}>
        <div className={classes.formWrapper}>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="courseThumbnail" className={classes.label}>
              Enter Course Thumbnail:{' '}
            </label>
            <CustomTextField
              type="file"
              variant="outlined"
              accept="image/*"
              fullWidth
              className={classes.div}
              id="courseThumbnail"
              name="courseThumbnail"
              onChange={formik.handleChange}
              error={formik.touched.courseThumbnail && Boolean(formik.errors.courseThumbnail)}
              helperText={formik.touched.courseThumbnail && formik.errors.courseThumbnail}
            />
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Course Title"
              className={classes.div}
              id="courseTitle"
              name="courseTitle"
              value={formik.values.courseTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.courseTitle && Boolean(formik.errors.courseTitle)}
              helperText={formik.touched.courseTitle && formik.errors.courseTitle}
            />
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Course Description"
              className={classes.div}
              id="courseDescription"
              name="courseDescription"
              value={formik.values.courseDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.courseDescription && Boolean(formik.errors.courseDescription)}
              helperText={formik.touched.courseDescription && formik.errors.courseDescription}
            />
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Course Price"
              className={classes.div}
              id="coursePrice"
              name="coursePrice"
              value={formik.values.coursePrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.coursePrice && Boolean(formik.errors.coursePrice)}
              helperText={formik.touched.coursePrice && formik.errors.coursePrice}
            />
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Course Category"
              className={classes.div}
              id="courseCategory"
              name="courseCategory"
              select
              value={formik.values.courseCategory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.courseCategory && Boolean(formik.errors.courseCategory)}
              helperText={formik.touched.courseCategory && formik.errors.courseCategory}
            >
              <MenuItem value="">
                <em>select a category</em>
              </MenuItem>
              {coursesCategory.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </CustomTextField>
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Course sub-category"
              className={classes.div}
              id="courseSubCategory"
              name="courseSubCategory"
              value={formik.values.courseSubCategory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.courseSubCategory && Boolean(formik.errors.courseSubCategory)}
              helperText={formik.touched.courseSubCategory && formik.errors.courseSubCategory}
            />
            <Divider className={classes.divider} />
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Course Difficulty Level"
              className={classes.div}
              id="courseLevel"
              name="courseLevel"
              select
              value={formik.values.courseLevel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.courseLevel && Boolean(formik.errors.courseLevel)}
              helperText={formik.touched.courseLevel && formik.errors.courseLevel}
            >
              <MenuItem value="">
                <em>select a level</em>
              </MenuItem>
              <MenuItem value="Begginer">Begginer</MenuItem>
              <MenuItem value="Basic">Basic</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
            </CustomTextField>
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Course Features"
              className={classes.div}
              id="courseFeatures"
              name="courseFeatures"
              value={formik.values.courseFeatures}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.courseFeatures && Boolean(formik.errors.courseFeatures)}
              helperText={formik.touched.courseFeatures && formik.errors.courseFeatures}
            />
            <Divider className={classes.divider} />
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Learner's Accessibility"
              className={classes.div}
              id="learnerAccessibility"
              name="learnerAccessibility"
              select
              value={formik.values.learnerAccessibility}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.learnerAccessibility && Boolean(formik.errors.learnerAccessibility)
              }
              helperText={formik.touched.learnerAccessibility && formik.errors.learnerAccessibility}
            >
              <MenuItem value="">
                <em>select an access type</em>
              </MenuItem>
              <MenuItem value="Public">Public</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Premium">Premium</MenuItem>
            </CustomTextField>

            <label htmlFor="lessonVideo" className={classes.label}>
              Enter lesson Video:{' '}
            </label>
            <CustomTextField
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
              variant="outlined"
              fullWidth
              className={classes.div}
              id="lessonVideo"
              name="lessonVideo"
              // value={formik.values.lessonVideo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lessonVideo && Boolean(formik.errors.lessonVideo)}
              helperText={formik.touched.lessonVideo && formik.errors.lessonVideo}
            />

            <label htmlFor="videoThumbnail" className={classes.label}>
              Enter Video Thumbnail:{' '}
            </label>
            <CustomTextField
              type="file"
              variant="outlined"
              accept="image/*"
              fullWidth
              className={classes.div}
              id="videoThumbnail"
              name="videoThumbnail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.videoThumbnail && Boolean(formik.errors.videoThumbnail)}
              helperText={formik.touched.videoThumbnail && formik.errors.videoThumbnail}
            />
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Lesson Name"
              className={classes.div}
              id="lessonName"
              name="lessonName"
              value={formik.values.lessonName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lessonName && Boolean(formik.errors.lessonName)}
              helperText={formik.touched.lessonName && formik.errors.lessonName}
            />
            <CustomTextField
              variant="outlined"
              fullWidth
              label="Enter Lesson Description"
              className={classes.div}
              id="lessonDescription"
              name="lessonDescription"
              value={formik.values.lessonDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lessonDescription && Boolean(formik.errors.lessonDescription)}
              helperText={formik.touched.lessonDescription && formik.errors.lessonDescription}
            />
            <Button variant="contained" type="submit" className={classes.submitButton}>
              Submit
            </Button>
            <Button
              variant="contained"
              type="reset"
              onClick={formik.handleReset}
              className={classes.cancelButton}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Box>
    </React.Fragment>
  );
};
export default FormComponent;
