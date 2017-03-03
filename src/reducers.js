import { combineReducers } from 'redux'
import { LIKE, LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from './actions'

function likes(state = {likes: 0}, action) {
  switch (action.type) {
    case LIKE:
      return { likes: state.likes + 1 }

    default:
      return state
  }
}

function login(state = {login: {isAuthenticating: false }}, action) {
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

const likeApp = combineReducers({
  likes,
  login
})

export default likeApp
