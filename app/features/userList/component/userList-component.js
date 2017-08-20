import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class UserListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    createListItems() {
        const { listOfUsers, selectUser } = this.props;
        return listOfUsers.map((x, index) => {
            return (
                <List key={index}>
                    <Link to={'/userList/' + x.id} style={{ textDecoration: 'none' }}>
                        <ListItem onClick={() => selectUser(x)}
                            leftAvatar={
                                <Avatar src={x.img} size={40} />
                            }
                            primaryText={x.firstName + ' ' + x.lastName + ' | ' + x.age}
                            secondaryText={x.description}
                        >

                        </ListItem>
                    </Link>
                </List>
            )
        })
    }
    render() {
        const style = {
            marginRight: 20,
        };

        return (
            <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div>
                    <AppBar title="User List"
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
                </div>
                <Card>
                    <CardText>
                        Here are one of an example of CRUD (Create, Read , Update, Delete),
                        Where in there are given list of user (4 user sample) which you can create their task,
                        Add task, Delete Task, Edit Task, as well as their dates and status.
                        Concept of React + Redux with the help of Material Ui, was used to implement this application sample.
                        * saving and data fetching was not appliccable due to frontend pusposes only.
                        {/*<FloatingActionButton style={style}>
                            <ContentAdd />
                        </FloatingActionButton>*/}
                    </CardText>
                    <Drawer open={this.state.open}>
                        <Avatar src={'https://scontent.cdninstagram.com/t51.2885-19/s150x150/18013186_1884415471815544_5035331559461224448_a.jpg'} size={210} style={{ margin: 20 }} />
                        <Divider style={{ marginTop: 10 }} />
                        <Card>
                           <CardText>
                               <center>
                               
                                    <h3>Hi My Name is RC !</h3>
                                
                                <p> I think We can be friends :)</p>
                                <p>
                                    Full-stack Web Developer | UI/UX Designer | Motivational Speaker 
                                        
                                </p>
                                <p>Please visit my anotherw website: rcfabian-static-portfolio.surge.sh</p>
                                </center>
                            </CardText>
                        </Card>
                        <Divider style={{ marginTop: 10 }} />

                        <MenuItem onClick={this.handleToggle.bind(this)}>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>My Skill Set</Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleToggle.bind(this)} >
                            <Link to={'/developersBackground'} style={{ textDecoration: 'none' }}>Developers Backgroud</Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleToggle.bind(this)}>Close </MenuItem>
                    </Drawer >
                    <Divider />
                    <CardMedia >
                        {this.createListItems()}
                    </CardMedia>

                </Card>
            </div>
        );
    }
}

export default UserListComponent;