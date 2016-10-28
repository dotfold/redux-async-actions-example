import { combineReducers } from 'redux'
import { REQUEST_USERS_LIST, RECEIVE_USERS_LIST } from './actions'

function users(state = {
  isFetching: true,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_USERS_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_USERS_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.payload,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  users
  // , other
  // , reducers..
})

export default rootReducer
