import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAuthData } from './actions'

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    data: state.fetchData.data,
    jwt: state.login.jwt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAuthData: (jwt) => {
      dispatch(fetchAuthData(jwt))
    }
  }
}

class AuthRequestWidget extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let data

    if (this.props.data) {
      data = <span>{this.props.data.message}</span>
    } else {
      data = ""
    }

    return (
      <div>
        <button onClick={e => {
          e.preventDefault()
          let token

          if (this.props.jwt) {
            token = this.props.jwt.token
          } else {
            token = ''
          }

          this.props.fetchAuthData(token)
        }}>
          Get data
        </button>
        {data}
      </div>
    )
  }
}

const AuthRequestContainer =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthRequestWidget)

export default AuthRequestContainer