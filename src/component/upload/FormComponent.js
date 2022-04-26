import React from 'react';
import { useFormik , useFormikContext ,useField ,Form } from 'formik';
import * as yup from 'yup';
import {TextField, Button, Box, Grid, MenuItem, Divider} from '@material-ui/core';
import {makeStyles ,styled} from "@material-ui/styles";
import {coursesCategory} from "../../assets/dummyDate";
import InputTags from "../../assets/InputTags";

const validationSchema = yup.object({
    courseThumbnail:yup
        .string('Enter your Course Thumbnail')
        .required('Course Thumbnail is required'),
    courseTitle: yup
        .string('Enter your course title')
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("course title is required"),
    courseDescription: yup
        .string('Enter your course title')
        .min(10, "Too Short!")
        .required("course Description is required"),
    coursePrice: yup
        .string('Enter your course price')
        .required("course price is required"),
    courseCategory: yup
        .string("Enter your course category")
        .required("course category is required"),
    courseSubCategory: yup
        .string('Enter your course sub-category')
        .required("course sub-category is required"),
    courseLevel: yup
        .string("Enter your course difficulty level")
        .required("course difficulty level is required"),
    courseFeatures:yup
        .string("Enter your course features")
        .required("course features is required"),
    courseTags:yup
        .string("Enter your course tags")
        .required("course tags is required"),
    learnerAccessibility:yup
        .string("Enter your learner's Accessibility")
        .required("learner's Accessibility is required"),
    lessonVideo:yup
        .string("Enter your lesson Video")
        .required("lesson Video is required"),
    videoThumbnail:yup
        .string("Enter your Video Thumbnail ")
        .required("Video Thumbnail is required"),
    lessonName:yup
        .string("Enter your lesson Name")
        .required("lesson Name is required"),
    lessonDescription:yup
        .string("Enter your lesson Description")
        .required("lesson Description is required"),


});

const useStyles = makeStyles(theme => ({
    formContainer:{
        backgroundColor:"#252529",
        borderRadius:'5px',
        marginTop:'2rem'
    },
    formWrapper:{
      width:'700px',
      maxWidth:'100%',
      margin:'0 auto',
      padding:'2rem'
    },
    div:{
        "& .MuiInputBase-input":{
            color: "#ffffff",
        },
        "& .MuiFormLabel-root":{
            color:"#ffffff",
        }
    },
    divider:{
        '&.MuiDivider-root':{
            backgroundColor:'#74849D',
            marginTop:'.5rem',
            marginBottom:'.5rem',
        },
    },
    submitButton:{
        backgroundColor:'#66BB6A',
        color:'#ffffff',
        marginRight:'1rem',
        '&.MuiButton-contained:hover':{
            backgroundColor:"green"
        }
    },
    cancelButton:{
        backgroundColor:'#DF3E34',
        color:'#ffffff',
    },

}));

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

const FormComponent = () =>{
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            courseThumbnail:'',
            courseTitle:'',
            courseDescription:'',
            coursePrice:'',
            courseCategory:'',
            courseSubCategory:'',
            courseLevel:'',
            courseFeatures:'',
            courseTags:'',
            learnerAccessibility:'',
            lessonVideo:'',
            videoThumbnail:'',
            lessonName:'',
            lessonDescription:'',
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

    const onKeyDown = (keyEvent) => {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }

    return(
        <React.Fragment>
            <Box className={classes.formContainer}>
                <div className={classes.formWrapper}>
                    <form onSubmit={formik.handleSubmit}>
                        <CustomTextField type="file"
                                    variant="outlined"
                                    accept="image/*"
                                    fullWidth
                                    className={classes.div}
                                    id="courseThumbnail"
                                    name="courseThumbnail"
                                    // value={formik.values.courseThumbnail}
                                    onChange={formik.handleChange}
                                    error={formik.touched.courseThumbnail && Boolean(formik.errors.courseThumbnail)}
                                    helperText={formik.touched.courseThumbnail && formik.errors.courseThumbnail}
                            />
                        <CustomTextField variant="outlined"
                                   fullWidth
                                   label="Enter Course Title"
                                   className={classes.div}
                                   id="courseTitle"
                                   name="courseTitle"
                                   value={formik.values.courseTitle}
                                   onChange={formik.handleChange}
                                   error={formik.touched.courseTitle && Boolean(formik.errors.courseTitle)}
                                   helperText={formik.touched.courseTitle && formik.errors.courseTitle}
                        />
                        <CustomTextField variant="outlined"
                                   fullWidth
                                   label="Enter Course Description"
                                   className={classes.div}
                                   id="courseDescription"
                                   name="courseDescription"
                                   value={formik.values.courseDescription}
                                   onChange={formik.handleChange}
                                   error={formik.touched.courseDescription && Boolean(formik.errors.courseDescription)}
                                   helperText={formik.touched.courseDescription && formik.errors.courseDescription}
                        />
                        <CustomTextField variant="outlined"
                                   fullWidth
                                   label="Enter Course Price"
                                   className={classes.div}
                                   id="coursePrice"
                                   name="coursePrice"
                                   value={formik.values.coursePrice}
                                   onChange={formik.handleChange}
                                   error={formik.touched.coursePrice && Boolean(formik.errors.coursePrice)}
                                   helperText={formik.touched.coursePrice && formik.errors.coursePrice}
                        />
                        <CustomTextField variant="outlined"
                                    fullWidth
                                    label="Enter Course Category"
                                    className={classes.div}
                                    id="courseCategory"
                                    name="courseCategory"
                                    select
                                    value={formik.values.courseCategory}
                                    onChange={formik.handleChange}
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
                        <CustomTextField variant="outlined"
                                   fullWidth
                                   label="Enter Course sub-category"
                                   className={classes.div}
                                   id="courseSubCategory"
                                   name="courseSubCategory"
                                   value={formik.values.courseSubCategory}
                                   onChange={formik.handleChange}
                                   error={formik.touched.courseSubCategory && Boolean(formik.errors.courseSubCategory)}
                                   helperText={formik.touched.courseSubCategory && formik.errors.courseSubCategory}
                        />
                    <Divider className={classes.divider}/>
                    <CustomTextField variant="outlined"
                                     fullWidth
                                     label="Enter Course Difficulty Level"
                                     className={classes.div}
                                     id="courseLevel"
                                     name="courseLevel"
                                     select
                                     value={formik.values.courseLevel}
                                     onChange={formik.handleChange}
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
                    <CustomTextField variant="outlined"
                                     fullWidth
                                     label="Enter Course Features"
                                     className={classes.div}
                                     id="courseFeatures"
                                     name="courseFeatures"
                                     value={formik.values.courseFeatures}
                                     onChange={formik.handleChange}
                                     error={formik.touched.courseFeatures && Boolean(formik.errors.courseFeatures)}
                                     helperText={formik.touched.courseFeatures && formik.errors.courseFeatures}
                    />
                    <InputTags  id="courseTags"
                                name="courseTags"
                                value={formik.values.courseTags}
                                onChange={formik.handleChange}
                                error={formik.touched.courseTags && Boolean(formik.errors.courseTags)}
                                helperText={formik.touched.courseTags && formik.errors.courseTags}
                    />
                    <Divider className={classes.divider}/>
                    <CustomTextField variant="outlined"
                                     fullWidth
                                     label="Enter Learner's Accessibility"
                                     className={classes.div}
                                     id="learnerAccessibility"
                                     name="learnerAccessibility"
                                     select
                                     value={formik.values.learnerAccessibility}
                                     onChange={formik.handleChange}
                                     error={formik.touched.learnerAccessibility && Boolean(formik.errors.learnerAccessibility)}
                                     helperText={formik.touched.learnerAccessibility && formik.errors.learnerAccessibility}
                    >
                        <MenuItem value="">
                            <em>select an access type</em>
                        </MenuItem>
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="Premium">Premium</MenuItem>
                    </CustomTextField>
                    <CustomTextField type="file"
                                     accept="video/mp4,video/x-m4v,video/*"
                                     variant="outlined"
                                     fullWidth
                                     className={classes.div}
                                     id="lessonVideo"
                                     name="lessonVideo"
                                     // value={formik.values.lessonVideo}
                                     onChange={formik.handleChange}
                                     error={formik.touched.lessonVideo && Boolean(formik.errors.lessonVideo)}
                                     helperText={formik.touched.lessonVideo && formik.errors.lessonVideo}
                    />
                    <CustomTextField type="file"
                                     variant="outlined"
                                     accept="image/*"
                                     fullWidth
                                     className={classes.div}
                                     id="videoThumbnail"
                                     name="videoThumbnail"
                                     // value={formik.values.videoThumbnail}
                                    // value={undefined}
                                     onChange={formik.handleChange}
                                     error={formik.touched.videoThumbnail && Boolean(formik.errors.videoThumbnail)}
                                     helperText={formik.touched.videoThumbnail && formik.errors.videoThumbnail}
                    />
                    <CustomTextField variant="outlined"
                                     fullWidth
                                     label="Enter Lesson Name"
                                     className={classes.div}
                                     id="lessonName"
                                     name="lessonName"
                                     value={formik.values.lessonName}
                                     onChange={formik.handleChange}
                                     error={formik.touched.lessonName && Boolean(formik.errors.lessonName)}
                                     helperText={formik.touched.lessonName && formik.errors.lessonName}
                    />
                    <CustomTextField variant="outlined"
                                     fullWidth
                                     label="Enter Lesson Description"
                                     className={classes.div}
                                     id="lessonDescription"
                                     name="lessonDescription"
                                     value={formik.values.lessonDescription}
                                     onChange={formik.handleChange}
                                     error={formik.touched.lessonDescription && Boolean(formik.errors.lessonDescription)}
                                     helperText={formik.touched.lessonDescription && formik.errors.lessonDescription}
                    />
                    <Button variant="contained"
                            type="submit"
                            className={classes.submitButton}
                    >
                        Submit
                    </Button>
                    <Button variant="contained" type="reset" onClick  ={formik.handleReset} className={classes.cancelButton}>Cancel</Button>
                    </form>
                    </div>
            </Box>

        </React.Fragment>
    )
}
export default FormComponent;