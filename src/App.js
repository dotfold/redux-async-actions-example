import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchUsersList } from './redux/actions'
import Users from './containers/Users'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUsersList())
  }

  render() {
    const { users, isFetching } = this.props
    return (
      <div>
        {isFetching && users.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && users.length === 0 &&
          <h2>Empty.</h2>
        }
        {users.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Users users={users} />
          </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {
    isFetching,
    lastUpdated,
    items: users
  } = state.users

  return {
    users,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
