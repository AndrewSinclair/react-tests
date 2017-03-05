import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import Menu from './menu'
import LikeContainer from './likecontainer'
import LoginContainer from './logincontainer'
import AuthRequestContainer from './authrequestcontainer'

const mapStateToProps = (state) => {
  console.log(state);
  return {jwt: state.login.jwt}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}



class RouterWidget extends Component {
  constructor(props) {
    super(props)

  }

  requireAuth(nextState, replace) {
    console.log(this.props.jwt)
    if (!this.props.jwt) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/"          component={Menu} >
          <Route path="/likes"   component={LikeContainer} />
          <Route path="/login"   component={LoginContainer} />
          <Route path="/request" component={AuthRequestContainer} onEnter={this.requireAuth.bind(this)}/>
        </Route>
      </Router> 
    )
  }
}

const RouterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterWidget)

export default RouterContainer
