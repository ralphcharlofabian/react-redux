import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as duck from '../duck';
import UserListComponent from '../component/userList-component';
class UserList extends Component {

    render() {
        const { users , selectUser,addUser,firstName,lastName,age,description } = this.props;
        return (
            <ul>
                <UserListComponent
                    listOfUsers={users}
                    selectUser ={selectUser}
                    addUser ={addUser}
                    firstName={firstName}
                    lastName={lastName}
                    age={age}
                    description={description}

                />
            </ul>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(duck, dispatch)
}


function mapStateToProps(state) {
    return {
        users: state.users,
        activeUserList:state.activeUserList
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);