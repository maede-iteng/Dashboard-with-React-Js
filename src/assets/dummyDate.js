import faker from '@faker-js/faker';

export const notificationData =[
  {
    message: "2FA verification failed",
    date: "020-11-04 12:00:2",
    duration: "3 min ago",
    icon: "https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png"
  },
  {
    message: "Phone verification pending",
    date: "020-11-04 12:00:2",
    duration: "3 min ago",
    icon: "https://cdn4.iconfinder.com/data/icons/fluent-outline-20px-vol-5/20/ic_fluent_question_20_regular-128.png"
  },
  {
    message: "DadeLine over to launch the new course",
    date: "020-11-04 12:00:2",
    duration: "3 min ago",
    icon: "https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png"
  },
  {
    message: "Device confirmation completed",
    date: "020-11-04 12:00:2",
    duration: "3 min ago",
    icon: "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png"

  }
];
export const studentQueries = [
  {
    avatar:faker.image.avatar(),
    question: "Machine Learning Bootcamp",
    author: "By Brandon Taylor",
    closeIcon: "https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png",
    checkIcon: "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png"
  },
  {
    avatar:faker.image.avatar(),
    question: "Python Bootcamp from Zero to Hero",
    author: "By Stweart Mark",
    closeIcon: "https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png",
    checkIcon: "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png"
  },
  {
    avatar:faker.image.avatar(),
    question: "Amazon Web Services Certification",
    author: "By Jhon Cane",
    closeIcon: "https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png",
    checkIcon: "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png"
  },
  {
    avatar:faker.image.avatar(),
    question: "The Web Developer Bootcamp 2021",
    author: "By Nicky Bonje",
    closeIcon: "https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png",
    checkIcon: "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/check-128.png"
  }
];

export const balance = [
  {
    title:"Today's Earn",
    price:"$19,34",
    arrowIcon:"https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png"
  },
  {
    title:"Under Review",
    price:"$1,56",
    arrowIcon:"https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png"
  },
  {
    title:"Pending",
    price:"$344,879",
    arrowIcon:"https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png"
  },
  {
    title:"Withdraw",
    price:"$567,34",
    arrowIcon:"https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png"
  },
];
export const coursesCategory = [
  {
    name:"Bootstrap Learning"
  },
  {
    name:"Reactjs"
  },
  {
    name:"Laravel Framework"
  }
];