import { combineReducers } from 'redux';
import userInfoReducers from './userInfoReducer';
import subscriberInfoReducers from './subscriberInfoReducer'

export default combineReducers({
  user: userInfoReducers,
  subscribers: subscriberInfoReducers
})