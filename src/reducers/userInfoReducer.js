import Axios from 'axios';
import { CLIENT_ID, REDIRECT_URI } from '../clientinfo'

import { LOGIN, GET_USER } from '../actions/types'


const initialState = {
  id: '',
  displayName: '',
  profileImage: '',
  accessToken: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        info: payload
      }

  default:
    return state
  }
}
