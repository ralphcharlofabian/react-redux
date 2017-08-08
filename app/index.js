import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import store from './store';
import * as moment from 'moment';
import { Provider } from 'react-redux';
import { Component } from 'react';
import UserListComponent from './features/userList/component/userList-component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app';
import route from './route';
injectTapEventPlugin();


ReactDOM.render(<Provider store={store}>
  <MuiThemeProvider>
  {route()}
  </MuiThemeProvider>
    
</Provider>, document.getElementById('root'));
 