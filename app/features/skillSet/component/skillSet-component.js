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
import Paper from 'material-ui/Paper';
import { PieChart } from 'react-easy-chart';
import { BarChart } from 'react-easy-chart';
import { LineChart } from 'react-easy-chart';
import InfiniteCalendar from 'react-infinite-calendar';
import Snackbar from 'material-ui/Snackbar';
import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';


//import 'react-infinite-calendar/styles.css';

class SkillSetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            stepIndex: 0,
            openSnackBarClicked: false,
            showToolTip: false,
            top: null,
            left: null,
            y: null,
            x: null,
            openSnackBarClickedBar: false,
            openSnackBarClickedPie: false
        }
    }
    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }


    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    mouseOverHandler(d, e) {
        this.setState({
            showToolTip: true,
            top: `${e.screenY - 10}px`,
            left: `${e.screenX + 10}px`,
            y: d.y,
            x: d.x,
            openSnackBarClicked: true
        });
    }

    mouseMoveHandler(e) {
        if (this.state.showToolTip) {
            this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px`, openSnackBarClicked: true });
        }
    }
    mouseOutHandler() {
        this.setState({
            showToolTip: false,
            openSnackBarClicked: false
        });
    }

    mouseMoveHandlerBar(e) {
        if (this.state.showToolTip) {
            this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px`, openSnackBarClickedBar: true });
        }
    }
    mouseOutHandlerBar() {
        this.setState({
            showToolTip: false,
            openSnackBarClickedBar: false
        });
    }


    mouseOverHandlerBar(d, e) {
        this.setState({
            openSnackBarClickedBar: true
        });
    }


    mouseMoveHandlerPie(e) {
        if (this.state.showToolTip) {
            this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px`, openSnackBarClickedPie: true });
        }
    }
    mouseOutHandlerPie() {
        this.setState({
            showToolTip: false,
            openSnackBarClickedPie: false
        });
    }


    mouseOverHandlerPie(d, e) {
        this.setState({
            openSnackBarClickedPie: true
        });
    }


    handleRequestClose() {
        this.setState({
            openSnackBarClicked: false,
            openSnackBarMouseHoverBar: false
        });
    };
    createTooltip() {
        if (this.state.showToolTip) {
            return (
                <ToolTip
                    top={this.state.top}
                    left={this.state.left}
                >
                    The x value is {this.state.x} and the y value is {this.state.y}
                </ToolTip>
            );
        }
        return false;
    }



    render() {
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

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
        const paperSkills = {
            height: '20%',
            width: '20%',
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: white
        };
        const paperAvatar = {
            height: '20%',
            width: '30%',
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: white
        };
        const paperChart = {
            height: '80%',
            width: '40%',
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: white
        };

        const paperBar = {
            height: '80%',
            width: '45.5%',
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: white
        };
 const paperLine = {
            height: '80%',
            width: '45.5%',
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: white
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
        const imageSize = { padding: '2%', width: '27%', height: '20%', display: 'inline-block' };
        
        return (
            <div >
                <div>
                    <AppBar title={<div>
                        <FlatButton onClick={this.handleToggle.bind(this)} style={{ marginRight: '2%' }}>
                            <Link to={'/developersBackground'} style={{ textDecoration: 'none', fontSize: '20px', color: '#ECEFF1' }}>Work Experience</Link>
                        </FlatButton>
                        <FlatButton onClick={this.handleToggle.bind(this)} >
                            <Link to={'/userList'} style={{ textDecoration: 'none', fontSize: '20px', color: '#ECEFF1' }}>CRUD Application</Link>
                        </FlatButton>
                    </div>}
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                        style={{ backgroundColor: blue600 }} />
                </div>
                <Card style={{ backgroundColor: '#ECEFF1' }}>
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
                                    <Link to={'/developersBackground'} style={{ textDecoration: 'none', color: '#ECEFF1' }}>Work Experience</Link>
                                </ListItem>

                                <ListItem onClick={this.handleToggle.bind(this)} >
                                    <Link to={'/userList'} style={{ textDecoration: 'none', color: '#ECEFF1' }}>CRUD Application</Link>
                                </ListItem>
                                <ListItem onClick={this.handleToggle.bind(this)} style={{ textDecoration: 'none', color: '#ECEFF1' }}>Close</ListItem>
                            </List>
                        </div>
                    </Drawer >
                    <Divider />
                </Card>
                <Card>
                    <div style={{ alignSelf: 'flexStart',backgroundColor: '#ECEFF1' }}>
                        <center>

                            <Paper style={paperAvatar} zDepth={1} rounded={false} >
                                   <ListItem  style={{ textDecoration: 'none', fontSize: '15px', color: '#ECEFF1',backgroundColor: '#29B6F6', marginBottom:10 }}>
                                    Hi I'm RC! Welcome to my page!
                            </ListItem>
                                <Avatar src={'https://scontent.cdninstagram.com/t51.2885-19/s150x150/18013186_1884415471815544_5035331559461224448_a.jpg'} size={'50%'} style={{ margin: '3%' }} />
                                <CardText style={{marginBottom:0, paddingBottom:0}}>
                                    <center >
                                        <p style={{marginBottom:0, paddingTop:0}}>I am a Full stack web developer and also a UI/UX designer (full stack designer).
                                             I also do motivational talks to some students and companies,
                                              for I believe I have a big part to change this world to a better one ;)
                                            Help me to achieve all of them by showcasing my skills and discover new adventure!

                                        </p>

                                    </center>


                                </CardText>
                            </Paper>
                            <Paper style={paperSkills} zDepth={1} rounded={false} >
                                <ListItem  style={{ textDecoration: 'none', fontSize: '15px', color: '#ECEFF1',backgroundColor: '#29B6F6', marginBottom:10 }}>
                                    Code | Language | stuffs
                            </ListItem>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png' alt="Mountain View" style={imageSize} />
                                <img src='http://io13-high-dpi.appspot.com/images/CSS3_Logo.svg' alt="Mountain View" style={imageSize} />
                                <img src='http://adriendecoster.fr/images/js.png' alt="Mountain View" style={imageSize} />
                                <img src='https://www.codesai.com/assets/csharp_logo.svg' alt="Mountain View" style={imageSize} />
                                <img src='https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg' alt="Mountain View" style={imageSize} />
                                <img src='https://prepros.io/img/less-logo.png' alt="Mountain View" style={imageSize} />
                                <img src='https://knowellg.github.io/assets/img/icons/redux-logo.png' alt="Mountain View" style={imageSize} />


                                <img src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="Mountain View" style={imageSize} />
                                <img src='https://cdn.worldvectorlogo.com/logos/material-ui.svg' alt="Mountain View" style={imageSize} />
                                <img src='https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg' alt="Mountain View" style={imageSize} />

                            </Paper>
                            <Paper style={paperChart} zDepth={1} rounded={false}>
                                 <ListItem  style={{ textDecoration: 'none', fontSize: '15px', color: '#ECEFF1',backgroundColor: '#29B6F6', marginBottom:10 }}>
                                    May I know how can I help you base on my overall assesment?
                            </ListItem>
                                <PieChart
                                    labels
                                    data={[
                                        { key: 'UI/UX Design', value: 600, color: '#009bcc' },
                                        { key: 'Front End', value: 700, color: '#f58b1f' },
                                        { key: 'Back End', value: 500, color: '#005a9e' },
                                        { key: 'Testing', value: 400, color: '#e21f36' }

                                    ]}
                                    styles={{
                                        '.chart_text': {
                                            fontSize: '2em',
                                            fill: '#fff'
                                        }
                                    }}
                                    innerHoleSize={80}
                                    size={350}
                                    mouseOverHandler={this.mouseOverHandlerPie.bind(this)}
                                    mouseOutHandler={this.mouseOutHandlerPie.bind(this)}
                                    mouseMoveHandler={this.mouseMoveHandlerPie.bind(this)}
                                />
                            </Paper>
                            <Paper style={paperBar} zDepth={1} rounded={false}>
                                 <ListItem  style={{ textDecoration: 'none', fontSize: '15px', color: '#ECEFF1',backgroundColor: '#29B6F6', marginBottom:10 }}>
                                    Skills I used to create awesome websites!
                            </ListItem>

                                <BarChart
                                    colorBars
                                    height={300}
                                    width={500}
                                    axes
                                    data={[
                                        { x: 'CSS3', y: 80, color: '#009bcc' },
                                        { x: 'Javascript', y: 100, color: '#e1f92c' },
                                        { x: 'HTML5', y: 120, color: '#f58b1f' },
                                        { x: 'C#', y: 99, color: '#005a9e' },
                                        { x: 'Others', y: 50, color: '#e3a51a' },
                                        { x: 'React.js', y: 70, color: '#17c5e8' },
                                        { x: 'Angular.js', y: 115, color: '#ea3027' },
                                        { x: 'Ionic.js', y: 55, color: '#4DB6AC' }
                                    ]}
                                    margin={{ top: 20, right: 0, bottom: 30, left: 50 }}
                                    mouseOverHandler={this.mouseOverHandlerBar.bind(this)}
                                    mouseOutHandler={this.mouseOutHandlerBar.bind(this)}
                                    mouseMoveHandler={this.mouseMoveHandlerBar.bind(this)}
                                />
                            </Paper>
                            <Paper style={paperLine} zDepth={1} rounded={false}>
                                <ListItem  style={{ textDecoration: 'none', fontSize: '15px', color: '#ECEFF1',backgroundColor: '#29B6F6', marginBottom:10 }}>
                                    I can do line chart example too!
                            </ListItem>

                                <LineChart
                                    axes
                                    dataPoints={true}
                                    grid={false}
                                    xDomainRange={[0, 60]}
                                    yDomainRange={[0, 60]}
                                    mouseOverHandler={this.mouseOverHandler.bind(this)}
                                    mouseOutHandler={this.mouseOutHandler.bind(this)}
                                    mouseMoveHandler={this.mouseMoveHandler.bind(this)}
                                    width={500}
                                    height={300}
                                    interpolate={'cardinal'}
                                    data={[
                                        [
                                            { x: 10, y: 25 },
                                            { x: 20, y: 10 },
                                            { x: 30, y: 25 },
                                            { x: 40, y: 10 },
                                            { x: 50, y: 12 },
                                            { x: 60, y: 25 }
                                        ], [
                                            { x: 10, y: 40 },
                                            { x: 20, y: 30 },
                                            { x: 30, y: 25 },
                                            { x: 40, y: 60 },
                                            { x: 50, y: 22 },
                                            { x: 60, y: 9 }
                                        ],
                                        [
                                            { x: 5, y: 20 },
                                            { x: 15, y: 30 },
                                            { x: 25, y: 25 },
                                            { x: 35, y: 43 },
                                            { x: 45, y: 50 },
                                            { x: 60, y: 60 }
                                        ]
                                    ]}
                                    axisLabels={{ x: 'Time', y: 'My Mind' }}
                                />
                            </Paper>

                        </center>
                    </div>
                </Card>
                <Snackbar
                    open={this.state.openSnackBarClicked}
                    message="You Ticle me :)"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose.bind(this)}
                />
                <Snackbar
                    open={this.state.openSnackBarClickedBar}
                    message="You ticle the Bar...sshhhhhh its still sleeping"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose.bind(this)}
                />
                <Snackbar
                    open={this.state.openSnackBarClickedPie}
                    message="You're interested to ME don't YOU :)"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose.bind(this)}
                />
            </div>
        );
    }
}
export default (SkillSetComponent);