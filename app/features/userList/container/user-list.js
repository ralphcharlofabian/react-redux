import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as duck from '../duck';
import UserListComponent from '../component/userList-component';
class UserList extends Component {

    render() {
        const { users , selectUser } = this.props;
        return (
            <ul>
                <UserListComponent
                    listOfUsers={users}
                    selectUser ={selectUser}
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
        users: state.users
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);