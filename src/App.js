import React, { useContext } from 'react';
import { ThemeProvider, createTheme, Grid } from '@material-ui/core';
import TopBar from './layouts/TopBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Wallet from './pages/Wallet';
import Withdraw from './pages/Withdraw';
import Upload from './pages/Upload';
import Board from './pages/Board';
import './assets/globalStyles/styles/main.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SideBar from './layouts/SideBar';
import './assets/globalStyles/styles/main.css';
import Settings from './pages/settings/Settings';
import AuthContext from './store/auth-context';
import Auth from './pages/Auth';
import { theme, useStyle } from './assets/globalStyles/styles';

function App() {
  const authCtx = useContext(AuthContext);
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {authCtx.isLoggedIn && (
          <Grid container className={classes.wrapper}>
            <Grid item lg={1} md={1} sm={12} xs={12}>
              <SideBar />
            </Grid>
            <Grid item lg={11} md={11} sm={12} xs={12} className="container">
              <TopBar />
              <Switch>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/courses">
                  <Courses />
                </Route>
                <Route exact path="/wallet">
                  <Wallet />
                </Route>
                <Route exact path="/withdraw">
                  <Withdraw />
                </Route>
                <Route exact path="/upload">
                  <Upload />
                </Route>
                <Route exact path="/board">
                  <Board />
                </Route>
                <Route exact path="/settings/:page?" render={(props) => <Settings {...props} />} />
                <Route exact path="/authForm">
                  <Auth />
                </Route>
                <Route path="*">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        )}
        <Switch>
          {!authCtx.isLoggedIn && (
            <Route exact path="/">
              <Redirect to="/" />
              <Auth />
            </Route>
          )}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
