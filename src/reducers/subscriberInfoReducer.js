
import { FETCH_SUBSCRIBERS } from '../actions/types'

const initialState = {
   subscribers: []
  
}

export default (state = initialState, { type, payload }) => {

  switch (type) {
    case FETCH_SUBSCRIBERS:
      return {
        ...state,
        subscribers: state.subscribers.concat(payload)
      }

  default:
    return state
  }
}
