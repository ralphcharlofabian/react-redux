import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetailComponent from '../component/userDetail-component';
import * as duck from '../duck'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
class UserDetail extends Component {

    componentWillMount() {
        const { user ,addTask } = this.props;
        if (!user) {
            browserHistory.push(
                '/'
            );
        }
    }  

    render() {
        const { user, addTask,toggleIsCompleted,deleteTask,editTask } = this.props;
        return (
           
            <div>
                {user ?
                    <UserDetailComponent
                        firstName={user.firstName}
                        lastName={user.lastName}
                        age={user.age}
                        description={user.description}
                        img = {user.img}
                        taskToDo ={user.taskToDo}
                        dueDate ={user.dueDate}
                        addTask = {addTask}
                        editTask = {editTask}
                        toggleIsCompleted ={toggleIsCompleted}
                        deleteTask ={deleteTask}
                    />
                    : null
                }
                
            </div>


        );


    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(duck, dispatch)
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);