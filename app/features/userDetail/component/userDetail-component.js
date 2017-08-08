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
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

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
            addTaskInput: '',
            editTaskInput: '',
            openAddModal: false,
            openEditModal: false,
            editTaskSelectedId:null,
            addTaskInputDate: null
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
        const { taskToDo, toggleIsCompleted, deleteTask } = this.props;
        const style = {
            margin: 12
        };

        const actionsAddButton = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={!this.state.addTaskInput}
                onTouchTap={this.saveNewTask.bind(this)}
            />
        ];

        const actionsEditButton = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={!this.state.editTaskInput}
                onTouchTap={this.saveEditTask.bind(this)}
            />
        ];
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
                            {x.dueDate}
                    </TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton label="Edit Task"
                            primary={true}
                            style={style}
                            onTouchTap={this.handleOpenEditModal.bind(this,x.taskId )}
                        />
                        <Dialog
                            title="Edit Selected Task"
                            actions={actionsEditButton}
                            modal={true}
                            open={this.state.openEditModal}>
                            <div>
                                <TextField
                                    ref='newTaskToBeAdd'
                                    value={this.state.editTask}
                                    onChange={this.handleEditTask.bind(this)}
                                    floatingLabelText="Type new task to do" />
                            </div>
                        </Dialog>
                        <Dialog
                            title="Add New Task"
                            actions={actionsAddButton}
                            modal={true}
                            open={this.state.openAddModal}>
                            <div>
                                <TextField
                                    ref='newTaskToBeAdd'
                                    value={this.state.addTask}
                                    onChange={this.handleAddTask.bind(this)}
                                    floatingLabelText="Type new task to do" />

                                    <DatePicker hintText="Landscape Inline Dialog"
                                    container="inline"
                                    mode="landscape"
                                    onChange={(event, x) => {this.handleAddTaskDate(x)}}
                                    minDate ={new Date()}
                                    />
                            </div>
                        </Dialog>


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
    //error here due to date cnversion
    handleAddTaskDate(x) {
        this.setState({
            addTaskInputDate: moment(x).month(1).format("YYYY-MM-DD")
        })
    }
    handleAddTask(event) {
        this.setState({
            addTaskInput: event.target.value
        })
    }
    handleEditTask(event) {
        this.setState({
            editTaskInput: event.target.value
        })
    }
    saveNewTask() {
        const {addTask} =this.props
        this.setState({ displayText: false });
        addTask(this.state.addTaskInput,this.state.addTaskInputDate);
        this.setState({ openAddModal: false });
    }

    saveEditTask() {
        const { editTask } = this.props
        this.setState({ displayText: false });
        editTask(this.state.editTaskInput,this.state.editTaskSelectedId);
        this.setState({ openEditModal: false });
    }

    handleOpenEditModal(taskId) {
       
        this.setState({ openEditModal: true,
        editTaskSelectedId:taskId });
        
    }
    handleOpenAddModal() {
        this.setState({ openAddModal: true });
    };

    handleClose() {
        this.setState({
            openAddModal: false,
            openEditModal: false
        });
    };

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
                                onTouchTap={this.handleOpenAddModal.bind(this)}
                            />
                        </CardActions>
                    </CardText>
                    <CardMedia >
                        <Table multiSelectable ={true}>
                            <TableHeader >
                                <TableRow>
                                    <TableHeaderColumn>Task to do</TableHeaderColumn>
                                    <TableHeaderColumn>Due date</TableHeaderColumn>
                                    <TableHeaderColumn>Options</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {this.UserListofTask()}
                            </TableBody>
                        </Table>
                    </CardMedia>
                </Card>
                <RaisedButton
                    label={<Link to={"/"}>Back to User List</Link>}
                    labelPosition="after"
                    style={style}>
                </RaisedButton>
            </div>
        );
    }
}

export default UserDetailComponent;