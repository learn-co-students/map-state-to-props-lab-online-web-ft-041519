import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
  return ({ users: state.users,
    userCount: state.userCount
   })
}

export default connect(mapStateToProps)(Users);
