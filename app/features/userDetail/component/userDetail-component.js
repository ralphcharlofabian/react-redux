import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';

export const cyan400 = '#26c6da';
export const cyan100 = '#b2ebf2';
export const cyanA100 = '#84ffff';
export const lightBlue300 = '#4fc3f7';
export const teal200 = '#80cbc4';
export const grey50 = '#fafafa';
class UserDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayText: false,
            addTaskState: '',
            editTaskState: false
        }
    }
    UserListofTask() {
        const styles = {
            block: {
                maxWidth: 250,
            },
            checkbox: {
                marginBottom: 16,
            },
        };
        const { taskToDo, toggleIsCompleted ,deleteTask} = this.props;
        const style = {
            margin: 12
        };
        return taskToDo.map((x, index) => {
            return (
                <TableRow key={index} >

                    <TableRowColumn>
                        <Checkbox defaultChecked={x.isCompleted}
                            label={x.task}
                            style={styles.checkbox}
                            onClick={() => (toggleIsCompleted(x.taskId))}
                        />
                    </TableRowColumn>
                    <TableRowColumn >
                      
                    </TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton label="Edit Task"
                                      primary={true}
                                      style={style}
                                      onClick={()=> this.setState({ editTaskState: true })}
                        />
                        <RaisedButton label="Delete Task"
                            secondary={true}
                            style={style}
                            onClick={() => (deleteTask(x.taskId))}
                        />
                    </TableRowColumn>
                </TableRow>

            )
        })

    }
    handleChangeAddTask(event) {
        this.setState({
            addTaskState: event.target.value
        })
    }
    saveNewTask() {
        this.setState({ displayText: false });
        this.props.addTask(this.state.addTaskState);
    }
    renderEditForm(){
         return (
            <TableRow>
                <TableRowColumn>
                    <RaisedButton label="Save"  primary={true} />
                </TableRowColumn>
            </TableRow>
        )
    }

    render() {
        // const { addTask } = this.props;
         const style = {
            margin: 12
        };
        return (

            <div>
                <Card>
                    <CardTitle title="List to do" >
                   
                     </CardTitle >
                    <Divider />

                    <CardHeader
                        title={this.props.firstName + ' ' + this.props.lastName}
                        subtitle={this.props.description}
                        avatar={this.props.img}
                    />
                    
                    <Divider />
                    <CardText >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                      <CardActions>
                            <RaisedButton
                                label="Add New Task"
                                labelPosition="before"
                                primary={true}
                                icon={<ContentAdd />}
                                onTouchTap={() => this.setState({ displayText: true })}
                            />
                            {/* {this.addTaskToUser()} */}

                            {this.state.displayText ?
                                <div>
                                    <TextField
                                        ref='newTaskToBeAdd'
                                        value={this.state.addTask}
                                        onChange={this.handleChangeAddTask.bind(this)}
                                        floatingLabelText="Type new task to do"
                                    />
                                    <RaisedButton label="Save" primary={true} onTouchTap={this.saveNewTask.bind(this)} />

                                </div>


                                : null}

                        </CardActions>
                    </CardText>

                    <CardMedia >
                        <Table >
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>Task to do</TableHeaderColumn>
                                    <TableHeaderColumn>Date</TableHeaderColumn>
                                    <TableHeaderColumn> </TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>

                             
                                                  { this.UserListofTask()}
                                                
                            </TableBody>

                        </Table>

                    </CardMedia>
                </Card>
                 <RaisedButton
                        label={ <Link to={"/"}>Back to User List</Link>}
                        labelPosition="after"
                        style={style}>
                       
                    </RaisedButton>
            </div>
        );
    }
}

export default UserDetailComponent;