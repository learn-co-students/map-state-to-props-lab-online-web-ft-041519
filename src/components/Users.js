import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  render() {
    let userList = this.props.users.map((u, i) => {
      return <li key={i}>{u.username}</li>
    })
    return (
      <div>
        Number of Users: {this.props.numberOfUsers}
        <ul>
          {userList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
