import UserDetail from './features/userDetail/container/user-detail';
import UserList from './features/UserList/container/user-list';
import React, { Component } from 'react';
import SkillSet from './features/skillSet/container/skill-set';

export default class App extends Component {

    render() {
        
       return (
            <div>
                 <SkillSet/>
            </div>
        );
    }
}