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
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';
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
            marginRight: 0,
        };
const stylesDrawer = {
            logo: {
                cursor: 'pointer',
                fontSize: 22,
                color: typography.textFullWhite,
                lineHeight: `${spacing.desktopKeylineIncrement}px`,
                fontWeight: typography.fontWeightLight,
                backgroundColor: blue600,
                paddingLeft: 40,
                height: 56,
            },
            menuItem: {
                color: white,
                fontSize: 14
            },
            avatar: {
                div: {
                    padding: '15px 0 20px 15px',
                    //backgroundImage:  'url(' + require('http://www.danieleliberti.org/wp-content/uploads/2014/08/20140819_backgroundk.jpg') + ')',
                    backgroundColor: blue600,
                    height: '100%'
                },
                icon: {
                    float: 'left',
                    display: 'block',
                    marginRight: 15,
                    boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
                },
                span: {
                    paddingTop: 12,
                    display: 'block',
                    color: 'white',
                    fontWeight: 300,
                    textShadow: '1px 1px #444',
                    paddingBottom: 12
                }
            }
        };
        return (
            <div >
                <div>
                    <AppBar title={<div>
                        <FlatButton onClick={this.handleToggle.bind(this)} style={{marginRight:'2%'}}>
                            <Link to={'/'} style={{ textDecoration: 'none', fontSize: '20px',color: '#ECEFF1' }}>My Skill Set</Link>
                        </FlatButton>
                        <FlatButton onClick={this.handleToggle.bind(this)} >
                            <Link to={'/developersBackground'} style={{ textDecoration: 'none', fontSize: '20px',color: '#ECEFF1'  }}>Work Experience</Link>
                        </FlatButton>
                    </div>}
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                        style={{ backgroundColor: blue600 }} />
                </div>

                <Card style={{ backgroundColor: '#ECEFF1' }}>
                    <CardText>
                        Here are one of an example of CRUD (Create, Read , Update, Delete),
                        Where in there are given list of user (4 user sample) which you can create their task,
                        Add task, Delete Task, Edit Task, as well as their dates and status.
                        Concept of React + Redux with the help of Material Ui, was used to implement this application sample.
                        * saving and data fetching was not appliccable due to frontend pusposes only.
                    
                    </CardText>
                    <Drawer open={this.state.open}>
                        <div style={stylesDrawer.logo} onClick={this.handleToggle.bind(this)}>
                            RC Fabian
                    </div>
                        <Divider />
                        <div style={stylesDrawer.avatar.div}>
                            <Avatar src="https://scontent.cdninstagram.com/t51.2885-19/s150x150/18013186_1884415471815544_5035331559461224448_a.jpg"
                                size={50}
                                style={stylesDrawer.avatar.icon} />
                            <span style={stylesDrawer.avatar.span}>
                                <li>Full-stack  Dev</li>
                                <li>UI/UX Designer </li>
                                <li>Speaker</li></span>
                            <Divider style={{ marginTop: 10 }} />
                            <List>
                               <ListItem onClick={this.handleToggle.bind(this)} >
                <Link to={'/'} style={{ textDecoration: 'none', color: '#ECEFF1' }}>My Skill Set</Link>
              </ListItem>

                                <ListItem onClick={this.handleToggle.bind(this)} >
                                   <Link to={'/developersBackground'} style={{ textDecoration: 'none',color: '#ECEFF1'  }}>Work Experience</Link>
                                </ListItem>
                                <ListItem onClick={this.handleToggle.bind(this)} style={{ textDecoration: 'none', color: '#ECEFF1' }}>Close</ListItem>
                            </List>
                        </div>
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