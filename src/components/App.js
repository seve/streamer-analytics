//
// ─── MAIN APP ───────────────────────────────────────────────────────────────────
//


import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components/macro'

import UserInfo from './UserInfo';
import SubscriberChart from './SubscriberChart'
import store from '../store';

import { COLORS } from '../colors'

const AppContainer = styled.div`
  text-align: center;
  background-color: ${COLORS.DARK_BLUE};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default class App extends Component {
  
  componentDidMount = async () => {
    
  }
  
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
            <UserInfo {... this.state} />
            <SubscriberChart />
        </AppContainer>
      </Provider>
    );
  }
}