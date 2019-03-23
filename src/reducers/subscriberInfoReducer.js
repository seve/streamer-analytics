
import { FETCH_SUBSCRIBERS } from '../actions/types'

const initialState = {
   info: {},
   subscribers: []
  
}

export default (state = initialState, { type, payload }) => {

  switch (type) {
    case FETCH_SUBSCRIBERS:
    console.log('NIGGA')
      return {
        ...state,
        subscribers: state.subscribers.append(payload)
      }

  default:
    return state
  }
}
