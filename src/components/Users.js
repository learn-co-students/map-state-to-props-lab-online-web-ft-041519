import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <p>Users:</p>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
          
        </ul>
        <p>Count: {this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};
 
export default connect(mapStateToProps)(Users);
