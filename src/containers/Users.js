import React, { PropTypes, Component } from 'react'

export default class Users extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map((user, i) =>
          <li key={i}>{user.name}</li>
        )}
      </ul>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired
}
