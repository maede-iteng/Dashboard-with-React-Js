import faker from '@faker-js/faker';
import ReceiptIcon from '@material-ui/icons/Receipt';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { IoLayersOutline } from 'react-icons/io5';

export const cardData = [
  {
    id: 1,
    title: 'Total Student',
    members: '3055',
    free: 'Free: 2240 students',
    paid: 'Paid: 815 Students',
    icon: <GroupOutlinedIcon />,
  },
  {
    id: 2,
    title: 'New Students',
    members: '1032',
    free: 'Free: 909 students',
    paid: 'Paid: 123 Students',
    icon: <AddCircleOutlineOutlinedIcon />,
  },
  {
    id: 3,
    title: 'Total Courses',
    members: '139',
    free: 'Free: 2240 students',
    paid: 'Paid: 26 Students',
    icon: <IoLayersOutline />,
  },
];
export const notificationData = [
  {
    id: 1,
    message: '2FA verification failed',
    date: '020-11-04 12:00:2',
    duration: '3 min ago',
    icon: 'https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png',
  },
  {
    id: 2,
    message: 'Phone verification pending',
    date: '020-11-04 12:00:2',
    duration: '3 min ago',
    icon: 'https://cdn4.iconfinder.com/data/icons/fluent-outline-20px-vol-5/20/ic_fluent_question_20_regular-128.png',
  },
  {
    id: 3,
    message: 'DadeLine over to launch the new course',
    date: '020-11-04 12:00:2',
    duration: '3 min ago',
    icon: 'https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png',
  },
  {
    id: 4,
    message: 'Device confirmation completed',
    date: '020-11-04 12:00:2',
    duration: '3 min ago',
    icon: 'https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png',
  },
];
export const studentQueries = [
  {
    id: 1,
    avatar: faker.image.avatar(),
    question: 'Machine Learning Bootcamp',
    author: 'By Brandon Taylor',
    closeIcon:
      'https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png',
    checkIcon:
      'https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png',
  },
  {
    id: 2,
    avatar: faker.image.avatar(),
    question: 'Python Bootcamp from Zero to Hero',
    author: 'By Stweart Mark',
    closeIcon:
      'https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png',
    checkIcon:
      'https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png',
  },
  {
    id: 3,
    avatar: faker.image.avatar(),
    question: 'Amazon Web Services Certification',
    author: 'By Jhon Cane',
    closeIcon:
      'https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png',
    checkIcon:
      'https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png',
  },
  {
    id: 4,
    avatar: faker.image.avatar(),
    question: 'The Web Developer Bootcamp 2021',
    author: 'By Nicky Bonje',
    closeIcon:
      'https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png',
    checkIcon:
      'https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png',
  },
];

export const balance = [
  {
    id: 1,
    title: "Today's Earn",
    price: '$19,34',
    arrowIcon:
      'https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png',
  },
  {
    id: 2,
    title: 'Under ReviewScores',
    price: '$1,56',
    arrowIcon:
      'https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png',
  },
  {
    id: 3,
    title: 'Pending',
    price: '$344,879',
    arrowIcon:
      'https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png',
  },
  {
    id: 4,
    title: 'Withdraw',
    price: '$567,34',
    arrowIcon:
      'https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png',
  },
];
export const coursesCategory = [
  {
    name: 'Bootstrap Learning',
  },
  {
    name: 'Reactjs',
  },
  {
    name: 'Laravel Framework',
  },
];
export const courses = [
  {
    id: 1,
    title: 'Python Bootcamp from Zero to Hero',
    description:
      'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
    courseThumbnail:
      'https://fsa2-assets.imgix.net/assets/laptop-coding-terminal.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.0&w=1280',
  },
  {
    id: 2,
    title: 'Learning Html & css ',
    description:
      'In this HTML and CSS tutorial, you will find more than 200 examples.CSS is the language we use to style an HTML document.HTML is the standard markup language for Web pages.',
    courseThumbnail:
      'https://www.codingdojo.com/blog/wp-content/uploads/codinglanguages-1280x720.jpg',
  },
  {
    id: 3,
    title: 'Java Script Tutorial',
    description:
      "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.\n" +
      'This tutorial will teach you JavaScript from basic to advanced.',
    courseThumbnail:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    id: 4,
    title: 'Amazon Web Services Certification',
    description:
      'Videos, labs & practice exams - AWS Certified (Solutions Architect, Developer, SysOps Administrator, Cloud Practitioner)',
    courseThumbnail:
      'https://www.codingdojo.com/blog/wp-content/uploads/Screen-Shot-2020-01-08-at-3.44.24-PM.png',
  },
];
export const groupDiscussions = [
  {
    name: 'Html5',
    title: 'Design',
    logo: 'https://edunet.vercel.app/images/courses/html5.png',
    members: '305K+',
  },
  {
    name: 'Css3',
    title: 'Design',
    logo: 'https://edunet.vercel.app/images/courses/css3.png',
    members: '135K+',
  },
  {
    name: 'JQuery',
    title: 'Design',
    logo: 'https://edunet.vercel.app/images/courses/jquery.png',
    members: '158K+',
  },
  {
    name: 'Laravel',
    title: 'Design',
    logo: 'https://edunet.vercel.app/images/courses/laravel.png',
    members: '232K+',
  },
];
export const withdrawTable = [
  {
    description: 'Master Card',
    trID: 'TQR252CH18',
    date: 'April 23, 2021',
    amount: '$180',
    card: 'Master Card',
    status: 'Payment Pending',
    receipt: <ReceiptIcon />,
  },
  {
    description: 'Paypal Account',
    trID: 'TQR252CH18',
    date: 'May 17, 2021',
    amount: '$210',
    card: 'Paypal Card',
    status: 'Payment Complete',
    receipt: <ReceiptIcon />,
  },
  {
    description: 'Nexus Account',
    trID: 'TQR252CH18',
    date: 'Dec 25, 2020',
    amount: '$170',
    card: 'Nexus Card',
    status: 'Payment Pending',
    receipt: <ReceiptIcon />,
  },
  {
    description: "Teacher's Portal",
    trID: 'TQR252CH18',
    date: 'Nov 21, 2020',
    amount: '$380',
    card: 'Edu Account',
    status: 'Payment Complete',
    receipt: <ReceiptIcon />,
  },
  {
    description: 'Visa Card',
    trID: 'TQR252CH18',
    date: 'Oct 19, 2021',
    amount: '$680',
    card: 'Master Card',
    status: 'Payment Complete',
    receipt: <ReceiptIcon />,
  },
];

export const board = [
  {
    id: 1,
    CourseLogo: 'https://edunet.vercel.app/images/courses/bootstrap.png',
    CourseName: 'Bootstrap Camp',
    Category: 'Growing designing concept',
    RankingIcon: <GradeOutlinedIcon />,
    Ranking: '3.98',
    Impression: '1096',
    Sales: '1685',
    Earning: '$31400',
  },
  {
    id: 2,
    CourseLogo: 'https://edunet.vercel.app/images/courses/html5.png',
    CourseName: 'Advanced Course of HTML5',
    Category: 'Real use in real project',
    RankingIcon: <GradeOutlinedIcon />,
    Ranking: '4.16',
    Impression: '1156',
    Sales: '3912',
    Earning: '$1965',
  },
  {
    id: 3,
    CourseLogo: 'https://edunet.vercel.app/images/courses/jquery.png',
    CourseName: 'Project Development using JQuery',
    Category: 'Implementation of JQuery',
    RankingIcon: <GradeOutlinedIcon />,
    Ranking: '4.89',
    Impression: '12369',
    Sales: '5733',
    Earning: '$4857',
  },
  {
    id: 4,
    CourseLogo: 'https://edunet.vercel.app/images/courses/vue.png',
    CourseName: 'Premium program of Vue',
    Category: 'Advanced course',
    RankingIcon: <GradeOutlinedIcon />,
    Ranking: '4.32',
    Impression: '12369',
    Sales: '985',
    Earning: '$35280',
  },
  {
    id: 5,
    CourseLogo: 'https://edunet.vercel.app/images/courses/sass.png',
    CourseName: 'Project with SASS',
    Category: 'sass instead of css',
    RankingIcon: <GradeOutlinedIcon />,
    Ranking: '4.06',
    Impression: '12369',
    Sales: '590',
    Earning: '$35280',
  },
];
