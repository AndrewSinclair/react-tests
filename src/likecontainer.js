import { connect } from 'react-redux'
import { incrementLike } from './actions'
import LikeButton from './likebutton'

const mapStateToProps = (state) => {
  //console.log(state);
  return {likesProp: state.likes.likes}
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementLikes: () => {
      dispatch(incrementLike())
    }
  }
}

const LikeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton)

export default LikeContainer