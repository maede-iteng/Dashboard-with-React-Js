import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import TitleOfPages from "../../component/TitleOfPages/TitleOfPages";

const PaymentMethod = () =>{
    return(
        <React.Fragment>
            <TitleOfPages title='Payment Method'
                          welcomeMessage='Welcome to Edunet Payment Method page'
                          prevPage='settings'
                          currentPage='Payment Method'
                          prevPageLink='/settings'
                          currentPageLink='/settings'
            />
        </React.Fragment>
    )
}
export default PaymentMethod;