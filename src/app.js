import 'babel-polyfill'
import React, {Component} from 'react'
import reactDom, {render} from 'react-dom'
import LikeContainer from './likecontainer'
import LoginContainer from './logincontainer'
import likeApp from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

class App extends Component {
    constructor() {
        super()

        this.store = createStore(likeApp,
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    }

    render() {
        return  (
            <Provider store={this.store}>
              <div>
                <LikeContainer />
                <LoginContainer />
              </div>
            </Provider>
        )
    }
}

render(<App/>, document.getElementById("app"))
