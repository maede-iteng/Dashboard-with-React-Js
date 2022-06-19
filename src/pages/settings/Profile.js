import React from 'react';
import { Grid } from '@material-ui/core';
import UserProfileForm from '../../component/SettingsForms/UserProfileForm';
import UpdateProfileForm from '../../component/SettingsForms/UpdateProfileForm';
import PersonalInformationForm from '../../component/SettingsForms/PersonalInformationForm';
import TitleOfPages from '../../component/TitleOfPages/TitleOfPages';
import { profileStyles } from './styles';

const Profile = () => {
  const classes = profileStyles();
  return (
    <React.Fragment>
      <TitleOfPages
        title="Profile"
        welcomeMessage="Welcome to Edunet Settings Profile page"
        prevPage="Settings"
        currentPage="Profile"
        prevPageLink="/settings"
        currentPageLink="/settings"
      />
      <Grid container className={classes.userInformation}>
        <UserProfileForm />
        <UpdateProfileForm />
        <PersonalInformationForm />
      </Grid>
    </React.Fragment>
  );
};
export default Profile;
