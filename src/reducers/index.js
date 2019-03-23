import { combineReducers } from 'redux';
import userInfoReducers from './userInfoReducer';

export default combineReducers({
  user: userInfoReducers
})