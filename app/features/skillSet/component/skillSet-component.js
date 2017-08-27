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
import InfiniteCalendar from 'react-infinite-calendar';
//import 'react-infinite-calendar/styles.css';

class SkillSetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            stepIndex: 0,
        }
    }
    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }


    handleToggle() {
        this.setState({ open: !this.state.open });
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
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#d1ebff'
        };
        const paperAvatar = {
            height: '20%',
            width: '30%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#d1ebff'
        };
        const paperChart = {
            height: '20%',
            width: '30%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#d1ebff'
        };

        const paperBar = {
            height: '80%',
            width: '80%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#d1ebff'
        };


        const imageSize = { padding: '2%', width: '30%', height: '20%', display: 'inline-block' };
        return (
            <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div>
                    <AppBar title="My Skill Set"
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
                </div>
                <Card>
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
                <Card>
                    <div style={{ alignSelf: 'flexStart' }}>
                        <center>

                            <Paper style={paperAvatar} zDepth={1} rounded={false} >
                                <Avatar src={'https://scontent.cdninstagram.com/t51.2885-19/s150x150/18013186_1884415471815544_5035331559461224448_a.jpg'} size={'60%'} style={{ margin: '5%' }} />
                                <CardText>
                                    <center>
                                        <p>Hi My Name is RC! I am a Full stack web developer and also a UI/UX designer (full stack designer).
                                             I also do motivational talks to some students and companies,
                                              for I believe I have a big part to change this world to a better one ;)
                                            Help me to achieve all of them by showcasing my skills and discover new adventure!

                                        </p>
                                        
                                        </center>
                                        
                                    
                                </CardText>
                            </Paper>
                            <Paper style={paperSkills} zDepth={1} rounded={false} >
                                <ListItem >
                                    Code | Language | stuffs
                            </ListItem>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png' alt="Mountain View" style={imageSize} />
                                <img src='http://io13-high-dpi.appspot.com/images/CSS3_Logo.svg' alt="Mountain View" style={imageSize} />
                                <img src='http://adriendecoster.fr/images/js.png' alt="Mountain View" style={imageSize} />
                                <img src='https://www.codesai.com/assets/csharp_logo.svg' alt="Mountain View" style={imageSize} />
                                <img src='https://cdn.worldvectorlogo.com/logos/angular-3.svg' alt="Mountain View" style={imageSize} />
                                <img src='https://prepros.io/img/less-logo.png' alt="Mountain View" style={imageSize} />
                                <img src='https://knowellg.github.io/assets/img/icons/redux-logo.png' alt="Mountain View" style={imageSize} />


                                <img src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="Mountain View" style={imageSize} />
                                <img src='https://cdn.worldvectorlogo.com/logos/material-ui.svg' alt="Mountain View" style={imageSize} />
                                <img src='https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg' alt="Mountain View" style={imageSize} />

                            </Paper>
                            <Paper style={paperChart} zDepth={1} rounded={false}>
                                <ListItem >
                                    May I know how can I help you base on my overall assesment in website?
                            </ListItem>
                                <PieChart
                                    labels
                                    data={[
                                        { key: 'UI/UX Design', value: 600, color: '#17c5e8' },
                                        { key: 'Front End', value: 700, color: '#ff8800' },
                                        { key: 'Back End', value: 500, color: '#7c37c6' },
                                        { key: 'Testing', value: 400, color: '#e21f36' },
                                        { key: 'Wittiness', value: 300, color: '#e1f92c' }

                                    ]}
                                    styles={{
                                        '.chart_text': {
                                            fontSize: '2em',
                                            fill: '#fff'
                                        }
                                    }}
                                    innerHoleSize={80}
                                    size={300}
                                />
                            </Paper>
                            <Paper style={paperBar} zDepth={1} rounded={false}>
                                <ListItem>
                                    Skills I used to create awesome websites!
                            </ListItem>

                                <BarChart
                                    colorBars
                                    height={300}
                                    width={650}
                                    axes
                                    data={[
                                        { x: 'CSS3', y: 80, color: '#4286f4' },
                                        { x: 'Javascript', y: 100, color: '#e1f92c' },
                                        { x: 'HTML5', y: 120, color: '#ff8800' },
                                        { x: 'C#', y: 99, color: '#5957f1' },
                                        { x: 'Others', y: 50, color: '#e3a51a' },
                                        { x: 'React.js', y: 70, color: '#17c5e8' },
                                        { x: 'Angular.js', y: 115, color: '#e21f36' }
                                    ]}
                                    margin={{ top: 20, right: 0, bottom: 30, left: 50 }}
                                />
                            </Paper>


                        </center>
                    </div>
                </Card>

            </div>
        );
    }
}
export default (SkillSetComponent);