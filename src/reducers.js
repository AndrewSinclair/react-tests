import { combineReducers } from 'redux'
import { LIKE } from './actions'

function likes(state = {likes: 0}, action) {
  switch (action.type) {
    case LIKE:
      return { likes: state.likes + 1 }

    default:
      return state
  }
}

const likeApp = combineReducers({
  likes: likes
})

export default likeApp
