import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';

import UserInfo from './UserInfo';
import SubscriberChart from './SubscriberChart'
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
  
  componentDidMount = async () => {
    // GET: USER DATA
    // NEW TWITCH API (MARCH 2019)
    // MUST BE ARROW FUNCTION TO BIND THIS
     const getUserData = async () => {
      try {
        let userData = await axios.get('https://api.twitch.tv/helix/users', {
          // SENDING CLIENT ID TOKEN TO CHECK FOR AUTHENTICATION
          // HEADER AUTHORISATION WILL BE REQUIRED FOR ALL GET REQUESTS
          headers: {
            Authorization: `Bearer ${queryString.parse(document.location.hash).access_token}`
          }
        })

        if (userData){
          this.setState({
            userId: userData.data.data[0].id,
            displayName: userData.data.data[0].display_name,
            profileImage: userData.data.data[0].profile_image_url
          })
        }
      } catch(error){
        console.log(error);
        this.setState({
          userId: 123,
          displayName: 'test',
          profileImage: ''
        })
      }
    }

    // GET: SUBSCRIBER COUNT
    // NEW TWITCH API (MARCH 2019)
    const getSubscribers= async () => {
      try {
        // let subscribers = await axios.get(`https://api.twitch.tv/helix/subscriptions?broadcaster_id=${this.state.userId}`, {
        let subscribers = await axios.get(`http://1d86d3d2.ngrok.io/helix/subscriptions?broadcaster_id=${this.state.userId}`, {
        headers: {
            // Authorization: `Bearer ${queryString.parse(document.location.hash).access_token}`
          }
        })

        if (subscribers){
          console.log(subscribers)
          return subscribers 
        }
      } catch(error){
        console.log(error)
      }
    }

    await getUserData();

    setInterval(async () => {
      await getSubscribers();
    }, 1000 * 60 * 5);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserInfo {... this.state} />
          <SubscriberChart />
        </header>
      </div>
    );
  }
}

export default App;
