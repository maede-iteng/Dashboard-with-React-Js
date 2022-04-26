import React from 'react';
import logo from '../assets/image/logoi.png';
import {makeStyles} from "@material-ui/styles";
import {Tooltip} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {IoAppsSharp} from "react-icons/io5";
import {IoLayersOutline} from "react-icons/io5";
import {IoCloudUploadSharp} from "react-icons/io5";
import {IoClipboardOutline} from "react-icons/io5";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import {RiHandCoinFill} from 'react-icons/ri';

const useStyles = makeStyles((theme) =>({
    sidebar:{
        flex:1,
        // height:'calc(100vh - 100px)',
        height:'100vh',
        backgroundColor:'#252529',
        textAlign:'center',
        padding:'2rem',
        position:'fixed',
        top:'0',
        left:'0',
        ['@media (max-width:959px)']:{
            position: 'sticky',
            height: '100px',
            order:1
        }
    },
    logo:{
        width:'30px',
        ['@media (max-width:959px)']: {
            display:'none'
        }
    },
    icon:{
        fontSize:'2rem',
        color:'#04C9B7'
    },
    ulMargin:{
        marginTop:'4.5rem',
        ['@media (max-width:959px)']:{
            marginTop:'0',
        }
    },
    listMargin:{
       marginTop:'3rem',
       marginBottom:'3rem',
        ['@media (max-width:959px)']:{
            display:'inline-block',
            margin:'0 1rem',
        }

    }
}))
const SideBar = () =>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={`${classes.sidebar} sidebar`}>
                <div className="sidebar__wrapper">
                    <img src={logo} alt="logo" className={classes.logo}/>
                    <ul className={classes.ulMargin}>
                        <li className={classes.listMargin}>
                            <Tooltip title="Dashboard" placement="right-start">
                                <Link to="/">
                                    <IoAppsSharp className={classes.icon}/>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className={classes.listMargin}>
                            <Tooltip title="Courses" placement="right-start">
                                <Link to="/courses">
                                    <IoLayersOutline className={classes.icon}/>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className={classes.listMargin}>
                            <Tooltip title="Wallet" placement="right-start">
                                <Link to="/">
                                    <AccountBalanceWalletIcon className={classes.icon}/>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className={classes.listMargin}>
                            <Tooltip title="WithDraw" placement="right-start">
                                <Link to="/">
                                    <RiHandCoinFill className={classes.icon}/>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className={classes.listMargin}>
                            <Tooltip title="Upload" placement="right-start">
                                <Link to="/upload">
                                    <IoCloudUploadSharp className={classes.icon}/>
                                </Link>
                            </Tooltip>
                        </li>
                        <li className={classes.listMargin}>
                            <Tooltip title="Board" placement="right-start">
                                <Link to="/">
                                    <IoClipboardOutline className={classes.icon}/>
                                </Link>
                            </Tooltip>
                        </li>
                    </ul>
                </div>


            </div>
        </React.Fragment>
    )
}
export default SideBar;