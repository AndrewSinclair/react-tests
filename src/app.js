import React, {Component} from 'react'
import reactDom, {render} from 'react-dom'
import LikeContainer from './likecontainer'
import LikeCounter from './likecounter'
import likeApp from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

class App extends Component {
    constructor() {
        super()

        this.store = createStore(likeApp)
    }


    render() {
        return  (
            <Provider store={this.store}>
                <div>
                    <LikeContainer />
                    <LikeCounter />
                </div>
            </Provider>
        )
    }
}

render(<App/>, document.getElementById("app"))
