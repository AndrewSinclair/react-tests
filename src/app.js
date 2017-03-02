import React, {Component} from 'react'
import reactDom, {render} from 'react-dom'
import LikeButton from './likebutton'
import LikeCounter from './likecounter'

class App extends Component {
    constructor() {
        super()

        this.state = {
            likes: 0
        }
    }

    incrementLikes() {
        let newLikes = this.state["likes"] + 1
        this.setState({likes: newLikes})
    }

    render() {
        return  (
            <div>
                <LikeButton incrementLikes={this.incrementLikes.bind(this)}/>
                <LikeCounter likes={this.state.likes}/>
            </div>
        )
    }
}

render(<App/>, document.getElementById("app"))
