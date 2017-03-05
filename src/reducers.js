import { combineReducers } from 'redux'
import { LIKE, LOGIN, SUCCESS_LOGIN, ERROR_LOGIN,
         SUCCESS_FETCH_DATA } from './actions'

function likes(state = {likes: 0}, action) {
  switch (action.type) {
    case LIKE:
      return { likes: state.likes + 1 }

    default:
      return state
  }
}

function login(state = {isAuthenticating: false, jwt: null}, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isAuthenticating: true
      })

    case SUCCESS_LOGIN:
      return Object.assign({}, state, {
        isAuthenticating: false,
        jwt: action.jwt
      })

    case ERROR_LOGIN:
      return Object.assign({}, state, {
        isAuthenticating: false,
        error: action.error
      })

    default:
      return state
  }
}

function fetchData(state = {body: null}, action) {
  switch (action.type) {
    case SUCCESS_FETCH_DATA:
      return Object.assign({}, state, {
        data: action.body
      })

    default:
      return state
  }
}

const likeApp = combineReducers({
  likes,
  login,
  fetchData
})

export default likeApp
