import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {AuthContextProvider} from "./store/auth-context";
ReactDOM.render(
  <React.StrictMode>
      <AuthContextProvider>
          {/*<Router>*/}
            <App />
          {/*</Router>*/}
      </AuthContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
