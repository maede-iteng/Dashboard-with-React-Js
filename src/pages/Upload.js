import React from 'react';
import FormComponent from '../component/Upload/FormComponent';
import TitleOfPages from "../component/TitleOfPages/TitleOfPages";
const Upload = () =>{
    return(
        <React.Fragment>
            <TitleOfPages title='Upload'
                          welcomeMessage='Welcome to Edunet Upload page'
                          prevPage='Home'
                          currentPage='Upload'
                          prevPageLink='/home'
                          currentPageLink='/upload'
            />
            <FormComponent/>
        </React.Fragment>
    )
}
export default Upload;