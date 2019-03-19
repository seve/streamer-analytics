import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import queryString from 'query-string'
import './App.css';

const CLIENT_ID='lk9hyx24834i7j25guphvmkwvgp86s'
const REDIRECT_URI='http://27dd729e.ngrok.io'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: '',
       displayName: '',
       profileImage: ''
    }
  }
  
  
  componentDidMount = () => {
    // GET: USER DATA
    // NEW TWITCH API (MARCH 2019)
    axios.get('https://api.twitch.tv/helix/users', {
      // SENDING CLIENT ID TOKEN TO CHECK FOR AUTHENTICATION
      // HEADER AUTHORISATION WILL BE REQUIRED FOR ALL GET REQUESTS
      headers: {
        Authorization: `Bearer ${queryString.parse(document.location.hash).access_token}`
      }
      
    })
      .then((response) => {
      if(response){
        this.setState({
          userId: response.data.data[0].id,
          displayName: response.data.data[0].display_name,
          profileImage: response.data.data[0].profile_image_url
        })
      }
      }).catch((err) => {
        console.log(err);
        
      })

      // GET: SUBSCRIBER COUNT
      // NEW TWITCH API (MARCH 2019)
      axios.get(`https://api.twitch.tv/helix/subscriptions`, {
        headers: {
          Authorization: `Bearer ${queryString.parse(document.location.hash).access_token}`
        }
      })
        .then((response) => {
          if(response){
            console.log(response)
            return response 
          }
        })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">

          {this.state.profileImage !== '' ? (<img src={this.state.profileImage} className="App-logo" />):(<img src={logo} className="App-logo" alt="logo" />)}
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
          <a href={`https://id.twitch.tv/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=channel:read:subscriptions`}>AUTH</a>
          <h1>test{CLIENT_ID}</h1>
          <h1>User Id: {this.state.userId}</h1>
        </header>
      </div>
    );
  }
}

export default App;
