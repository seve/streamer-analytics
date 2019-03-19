import React, { Component } from 'react';
import axios from 'axios'
import queryString from 'query-string'
import './App.css';

import UserInfo from './UserInfo'




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
      .then((hi) => {
        // GET: SUBSCRIBER COUNT
        // NEW TWITCH API (MARCH 2019)
        axios.get(`https://api.twitch.tv/helix/subscriptions?broadcaster_id=${this.state.userId}`, {
          headers: {
            Authorization: `Bearer ${queryString.parse(document.location.hash).access_token}`
          }
        })
          .then((response) => {
            if(response){
              console.log("hello")
              console.log(response)
              return response 
            }
          }).catch((err) => {
            console.log(err)
          })
        })

      
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserInfo {... this.state} />
          <h1>User Id: {this.state.userId}</h1>
        </header>
      </div>
    );
  }
}

export default App;
