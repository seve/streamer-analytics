import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

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
    axios.get('https://api.twitch.tv/helix/users')
      .then((response) => {
        this.setState({
          userId: response.id,
          displayName: response.display_name,
          profileImage: response.profile_image
        })
      })
  }

  axios.get('')
  
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
          <a href="https://id.twitch.tv/oauth2/authorize?client_id=lk9hyx24834i7j25guphvmkwvgp86s&redirect_uri=https://c34b75e4.ngrok.io&response_type=token&scope=channel:read:subscriptions">AUTH</a>
          <h1>User Id: {this.state.userId}</h1>
        </header>
      </div>
    );
  }
}

export default App;
