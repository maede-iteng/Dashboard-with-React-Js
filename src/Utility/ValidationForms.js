import * as yup from "yup";

export const validationAuthFormSchema = yup.object({
    fullName: yup
        .string('Enter your fullName')
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("fullName is required"),
    password: yup
        .string('Enter your password')
        .min(8, "Too Short!")
        .required("password is required"),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    email: yup.string().email('Invalid email format').required('email is required')
});

export const validationPersonalInformationFormSchema = yup.object({
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

export const validationUpdateProfileFormSchema = yup.object({
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

export const validationUserProfileFormSchema = yup.object({
    fullName: yup
        .string('Enter your Full Name')
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Full Name is required"),
    profileImage:yup
        .string('Enter your Profile Image')
        .required('Profile Image is required'),
});
export const validationFormComponentSchema = yup.object({
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