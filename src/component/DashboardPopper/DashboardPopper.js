import React, { useContext, useState } from 'react';
import {
  Menu,
  MenuItem,
  Avatar,
  Divider,
  Box,
  Tooltip,
  ListItemIcon,
  IconButton,
} from '@material-ui/core';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link, useHistory } from 'react-router-dom';
import Settings from '@material-ui/icons/Settings';
import AuthContext from '../../store/auth-context';
import { dashboardMenuStyles } from './styles';

const DashboardPopper = () => {
  const history = useHistory();
  const classes = dashboardMenuStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const authCtx = useContext(AuthContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/');
  };

  return (
    <React.Fragment>
      <Box className={classes.menuWrapper}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
            ></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        className={classes.paperProps}
        PaperProps={{ elevation: 0 }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider className={classes.divider} />
        <Link to="/settings/profile">
          <MenuItem>
            <ListItemIcon>
              <Settings className={classes.icon} fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        </Link>
        {authCtx.isLoggedIn && (
          <MenuItem onClick={logoutHandler}>
            <ListItemIcon>
              <ExitToAppOutlinedIcon className={classes.icon} fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
};
export default DashboardPopper;
