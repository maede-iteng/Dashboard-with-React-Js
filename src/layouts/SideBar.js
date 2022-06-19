import React from 'react';
import logo from '../assets/image/logoi.png';
import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IoAppsSharp } from 'react-icons/io5';
import { IoLayersOutline } from 'react-icons/io5';
import { IoCloudUploadSharp } from 'react-icons/io5';
import { IoClipboardOutline } from 'react-icons/io5';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { RiHandCoinFill } from 'react-icons/ri';
import { sidebarStyles } from './styles';

const SideBar = () => {
  const classes = sidebarStyles();
  return (
    <React.Fragment>
      <div className={`${classes.sidebar} sidebar`}>
        <div className="sidebar__wrapper">
          <img src={logo} alt="logo" className={classes.logo} />
          <ul className={classes.ulMargin}>
            <li className={classes.listMargin}>
              <Tooltip title="Dashboard" placement="right-start">
                <Link to="/">
                  <IoAppsSharp className={classes.icon} />
                </Link>
              </Tooltip>
            </li>
            <li className={classes.listMargin}>
              <Tooltip title="Courses" placement="right-start">
                <Link to="/courses">
                  <IoLayersOutline className={classes.icon} />
                </Link>
              </Tooltip>
            </li>
            <li className={classes.listMargin}>
              <Tooltip title="Wallet" placement="right-start">
                <Link to="/wallet">
                  <AccountBalanceWalletIcon className={classes.icon} />
                </Link>
              </Tooltip>
            </li>
            <li className={classes.listMargin}>
              <Tooltip title="WithDraw" placement="right-start">
                <Link to="/Withdraw">
                  <RiHandCoinFill className={classes.icon} />
                </Link>
              </Tooltip>
            </li>
            <li className={classes.listMargin}>
              <Tooltip title="Upload" placement="right-start">
                <Link to="/upload">
                  <IoCloudUploadSharp className={classes.icon} />
                </Link>
              </Tooltip>
            </li>
            <li className={classes.listMargin}>
              <Tooltip title="Board" placement="right-start">
                <Link to="/board">
                  <IoClipboardOutline className={classes.icon} />
                </Link>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SideBar;
