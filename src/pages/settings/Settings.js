import React, { useState } from 'react';
import { Tab, Tabs, Box, Grid } from '@material-ui/core';
import Profile from './Profile';
import Application from './Application';
import PaymentMethod from './PaymentMethod';
import { settingsStyles } from './styles';

const Settings = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  const classes = settingsStyles();
  const indexToTabName = {
    profile: 0,
    application: 1,
    paymentMethod: 2,
  };
  const tabNameToIndex = {
    0: 'profile',
    1: 'application',
    2: 'paymentMethod',
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);
  const handleChange = (event, newValue) => {
    history.push(`/settings/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };
  return (
    <React.Fragment>
      <Grid item>
        <Box className={classes.box}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedTab}
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.tabs}
          >
            <Tab label="Profile" />
            <Tab label="Application" />
            <Tab label="Payment Method" />
          </Tabs>
        </Box>
        {selectedTab === 0 && <Profile />}
        {selectedTab === 1 && <Application />}
        {selectedTab === 2 && <PaymentMethod />}
      </Grid>
    </React.Fragment>
  );
};
export default Settings;
