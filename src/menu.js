import React, { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/">
            home
          </Link>
          <Link to="/likes">
            likes
          </Link>
          <Link to="/login">
            Login
          </Link>
          <Link to="/request">
            request
          </Link>
        </p>
        
        {this.props.children}
      </div>
    )
  }
}

export default Menu
