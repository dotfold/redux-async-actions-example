
import UsersFetcher from '../api/UsersFetcher'

// would be located in own module... auth/getAuthToken.js
const getAuthToken = () => {
  return 'Auth!'
}

export const REQUEST_USERS_LIST = 'REQUEST_USERS_LIST'
function requestUsersList () {
  return {
    type: REQUEST_USERS_LIST
  }
}

export const RECEIVE_USERS_LIST = 'RECEIVE_USERS_LIST'
function receiveUsersList (json) {
  return {
    type: RECEIVE_USERS_LIST,
    payload: json, // do any response field mapping here
    receivedAt: Date.now()
  }
}

const config = {
  protocol: 'https',
  host: 'jsonplaceholder.typicode.com',
  base: '' // e.g. /api/v1
}

export function fetchUsersList () {
  const users = new UsersFetcher(config, getAuthToken)
  return dispatch => {
    dispatch(requestUsersList())
    return users.list()
      .then(response => response.json())
      .then(json => dispatch(receiveUsersList(json)))
      //.catch error handling
  }
}
