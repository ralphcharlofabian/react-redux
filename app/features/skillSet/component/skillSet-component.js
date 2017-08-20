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
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';

class SkillSetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            stepIndex: 0,
        }
    }



    handleToggle() {
        this.setState({ open: !this.state.open });
    }
    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 500,
                height: 450,
                overflowY: 'auto',
            },
        };
        const { listOfCompany } = this.props;
        return (
            <div style={{paddingLeft:'10%',paddingRight:'10%'}}>
                <div>
                    <AppBar title="My Skill Set"
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
                </div>
                <Card>
                    <CardText>
             Listed Below are my skills aquired and used to create some awesome websites.
                        Most are learned in the process of hardwork and passion, dedication and putting heart into it is the key. 
                        
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
                        <List>
                           <ListItem onClick={this.handleToggle.bind(this)} >
           <Link to={'/developersBackground'} style={{ textDecoration: 'none' }}>Developers Backgroud</Link>
            </ListItem>
                        
                         <ListItem onClick={this.handleToggle.bind(this)} >
                        <Link to={'/userList'} style={{ textDecoration: 'none' }}>CRUD Application</Link>
                        </ListItem>
                          <ListItem onClick={this.handleToggle.bind(this)} >Close</ListItem>
                        </List>
                        
                    </Drawer >
                    <Divider />
                </Card>
       
            </div>
        );
    }
}
export default (SkillSetComponent);