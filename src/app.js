import 'babel-polyfill'
import React, {Component} from 'react'
import reactDom, {render} from 'react-dom'
import RouterContainer from './routercontainer'
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

    requireAuth(nextState, replace) {
      if (!auth.loggedIn()) {
        replace({
          pathname: '/login',
          state: { nextPathname: nextState.location.pathname }
        })
      }
    }

    render() {
        return  (
            <Provider store={this.store}>
                <RouterContainer />
            </Provider>
        )
    }
}

render(<App/>, document.getElementById("app"))
