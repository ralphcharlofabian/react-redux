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

class UserListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            open:false
        }
    }

 handleToggle() {
     this.setState({open: !this.state.open});}

    createListItems() {
        const { listOfUsers, selectUser } = this.props;
        return listOfUsers.map((x, index) => {
            return (
                <List key={index}>
                    <Link to={'/' + x.id} >
                        <ListItem onClick={() => selectUser(x)}
                            leftAvatar={
                                <Avatar src={x.img} />
                            }>
                            {x.firstName} {x.lastName}
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
            <div>
                <div>
                    <AppBar title="User List" 
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
                </div>
                <Card>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        <FloatingActionButton style={style}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </CardText>
 <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
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