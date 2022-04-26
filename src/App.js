import React from 'react';
import {ThemeProvider, createTheme , Grid} from "@material-ui/core";
import TopBar from "./component/TopBar";
import Home from './pages/Home';
import Courses from './pages/Courses';
import Upload from './pages/Upload';
import './styles/main.css';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from "react-router-dom";
import SideBar from "./component/SideBar";
import './styles/main.css';
import Settings from "./pages/settings/Settings";

const theme = createTheme({
  palette:{
    primary:{
      darker:'#1C1C1F',
      main:'#252529' ,
      contrastText:"#ffffff",
    },
    secondary:{
        main:'#04C9B7',
        light:'#74849D'
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
          <Router>
              <Grid container>
                  <Grid item lg={1} md={1} sm={12} xs={12}>
                      <SideBar/>
                  </Grid>
                 <Grid item lg={11} md={11} sm={12} xs={12} className='container'>
                     <TopBar/>
                     <Switch>
                         <Route exact path="/" ><Home/></Route>
                         <Route exact path="/courses" ><Courses/></Route>
                         <Route exact path="/upload" ><Upload/></Route>
                         <Route exact path="/settings/:page?" render={props => <Settings {...props}/>}/>
                     </Switch>
                 </Grid>
              </Grid>
          </Router>
      </React.Fragment>
     </ThemeProvider>
  );
}

export default App;
