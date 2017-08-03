import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
class UserListComponent extends React.Component {
    constructor(props) {
        super(props);
    }


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
        return (
            <div>
                <div>
                    <AppBar title="User List" />
                </div>
                <Card>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
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