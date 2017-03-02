import React, {Component} from 'react'

class LikeCounter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return  (
            <div>
              This is the like counter.
              <span style={{"fontWeight": "bold"}}>{this.props.likes}</span>
            </div>
        )
    }
}

export default LikeCounter
