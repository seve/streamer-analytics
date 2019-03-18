import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import queryString from 'query-string'
import dotenv from 'dotenv'
import './App.css';
dotenv.config()

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: '',
       displayName: '',
       profileImage: ''
    }
  }
  
  // GET REQUEST FOR USER DATA
  componentDidMount = () => {
    axios.get('https://api.twitch.tv/helix/users', {
      // SENDING CLIENT ID TOKEN TO CHECK FOR AUTHENTICATION
      headers: {
        header1: `Authorization: OAuth ${queryString.parse(document.location.hash.access).access_token}`
      } 
    })
      .then((response) => {
        this.setState({
          userId: response.id,
          displayName: response.display_name,
          profileImage: response.profile_image
        })
      })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a href={`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=token&scope=channel:read:subscriptions`}>AUTH</a>
          <h1>User Id: {this.state.userId}</h1>
        </header>
      </div>
    );
  }
}

export default App;
