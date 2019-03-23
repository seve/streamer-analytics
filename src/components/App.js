//
// ─── MAIN APP ───────────────────────────────────────────────────────────────────
//


import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import axios from 'axios';
import queryString from 'query-string';
import UserInfo from './UserInfo';
import SubscriberChart from './SubscriberChart'
import './app/App.css';
import store from '../store';

export default class App extends Component {
  
  componentDidMount = async () => {
    
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <UserInfo {... this.state} />
            <SubscriberChart />
          </header>
        </div>
      </Provider>
    );
  }
}