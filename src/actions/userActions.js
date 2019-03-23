import axios from 'axios';
import queryString from 'query-string'

import { LOGIN, GET_USER } from './types';
import { CLIENT_ID, REDIRECT_URI} from '../clientinfo'

export const fetchUserData = () => async dispatch => {
  try {
    let userData = await axios.get('https://api.twitch.tv/helix/users', {
      // SENDING CLIENT ID TOKEN TO CHECK FOR AUTHENTICATION
      // HEADER AUTHORISATION WILL BE REQUIRED FOR ALL GET REQUESTS
      headers: {
        Authorization: `Bearer ${queryString.parse(document.location.hash).access_token}`
      }
    })

    if (userData){
      dispatch({
        type: GET_USER,
        payload: userData.data.data[0]
      })
    }
  } catch(error){
    console.log(error);
    dispatch({
      type: GET_USER,
      payload: {userId: 123,
        displayName: 'test',
        profileImage: ''}
    })
  }
}

