import UserDetail from './features/userDetail/container/user-detail';
import UserList from './features/UserList/container/user-list'
import React, { Component } from 'react';

export default class App extends Component {

    render() {
        
       return (
            <div>
                 <UserList />
            </div>
        );
    }
}