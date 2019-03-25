//
// ─── SUBSCRIBERS ACTION ─────────────────────────────────────────────────────────
//


import axios from 'axios'
import queryString from 'query-string'
import { FETCH_SUBSCRIBERS } from './types'
import store from '../store'

// GET: SUBSCRIBER COUNTss
// NEW TWITCH API (MARCH 2019)
export const fetchSubscribers = () => async dispatch => {
  try {
      const userID = store.getState().user.id
      let subscribers = await axios.get(`https://ts-analytica-test.herokuapp.com/helix/subscriptions?broadcaster_id=${userID}`, {
    headers: {
        Authorization: `Bearer ${queryString.parse(document.location.hash).access_token}`
      }
    })

    if (subscribers){
      dispatch({
        type: FETCH_SUBSCRIBERS,
        payload: subscribers.data
      })
    }
  } catch(error){
    console.log(error)
    
  }
}

setInterval(() => {
  fetchSubscribers();
}, 1000 * 60 * 5);