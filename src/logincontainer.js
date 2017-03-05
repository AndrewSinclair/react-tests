import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogin } from './actions'

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    isAuthenticating: state.isAuthenticating,
    jwt: state.login.jwt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (userCreds) => {
      dispatch(fetchLogin(userCreds))
    }
  }
}

class LoginWidget extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let user, password
    if (!!this.props.jwt) {
      return <div>You are logged in!</div>
    }
    return (
      <div className={
        this.props.isAuthenticating ? "is-authenticating" : ""
      }>
        <form onSubmit={e => {
          e.preventDefault()
          if (!user.value.trim() && !password.value.trim()) {
            return
          }
          this.props.fetchLogin({
            username: user.value,
            password: password.value
          })
        }}>
          <input type="text" ref={node => {
            user = node
          }} />

          <input type="password" ref={node => {
            password = node
          }} />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

const LoginContainer =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginWidget)

export default LoginContainer