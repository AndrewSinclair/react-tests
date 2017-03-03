import React, {Component} from 'react'

class LikeButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return  (
            <div>
              <button onClick={this.props.incrementLikes}>+ 1</button>
              <div>{this.props.likesProp}</div>
            </div>
        )
    }
}

export default LikeButton
