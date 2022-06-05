import React from 'react';
import TitleOfPages from "../../component/TitleOfPages/TitleOfPages";

const Application = () =>{
    return(
        <React.Fragment>
            <TitleOfPages title='Application'
                          welcomeMessage='Welcome to Edunet Application page'
                          prevPage='settings'
                          currentPage='Application'
                          prevPageLink='/settings'
                          currentPageLinl='/settings'
            />
        </React.Fragment>
    )
}
export default Application;