
import { FETCH_USER } from '../actions/types'


const initialState = {
  info: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        info: payload
      }

  default:
    return state
  }
}
