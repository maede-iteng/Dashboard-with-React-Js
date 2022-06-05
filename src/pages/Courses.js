import React from 'react';
import Content from '../component/Courses/Content';
import TitleOfPages from "../component/TitleOfPages/TitleOfPages";

const Courses = () =>{
    return(
        <React.Fragment>
            <TitleOfPages title='My Courses'
                          welcomeMessage='Welcome to Edunet My Courses page'
                          prevPage='Home'
                          currentPage='My Courses'
                          prevPageLink='/home'
                          currentPageLink='/courses'
            />
            <Content/>
        </React.Fragment>
    )
}
export default Courses;