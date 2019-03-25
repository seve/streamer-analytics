
import { FETCH_SUBSCRIBERS } from '../actions/types'

const initialState = {
   users: [[]]
  
}

export default (state = initialState, { type, payload }) => {
  
  switch (type) {
    case FETCH_SUBSCRIBERS:
      state.users.push(payload)
      return {
        users: state.users
      }

  default:
    return state
  }
}
