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
import { PieChart ,Legend } from 'react-easy-chart';
import { BarChart } from 'react-easy-chart';
import { LineChart } from 'react-easy-chart';
import InfiniteCalendar from 'react-infinite-calendar';
import Snackbar from 'material-ui/Snackbar';
import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';


//import 'react-infinite-calendar/styles.css';
import Dialog from 'material-ui/Dialog';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
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

            openSnackBarClickedPie: false,
            openDialogBoxPic: false,
            setTimeOutStateDoneBar: false,
            setTimeOutStateDonePie: false,
            setTimeoutStateDoneLine: false,
            opacity: 0,
            sounds:false,
            openDialogBoxMessage:false,
            company:'',
            feedback:'',
            imageSource:'',
            name:'',
            position:'',
            colorChange:false

        }
    }

    componentDidMount() {
        setTimeout(
            () => this.setState({
                setTimeOutStateDoneBar: true,
                setTimeOutStateDonePie: true,
                setTimeoutStateDoneLine: true,
                opacity: 1
            }),
            200
        );
    }
    pieClickAnimation() {
        this.setState({ setTimeOutStateDonePie: false });
        setTimeout(
            () => this.setState({ setTimeOutStateDonePie: true }),
            500
        );
    }
    barClickAnimation() {
        this.setState({ setTimeOutStateDoneBar: false });
        setTimeout(
            () => this.setState({ setTimeOutStateDoneBar: true }),
            500
        );
    }
    handleDialogBoxPic(event) {
        this.setState({ openDialogBoxPic: true });
    }

    handleDialogBoxMessage(info) {
        this.setState({ openDialogBoxMessage: true,
        company:info.company,
            feedback:info.feedback,
            imageSource:info.imageSource,
            name:info.name,
            position:info.position });
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

    handleClose() {
        this.setState({ openDialogBoxPic: false });
    };

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

sounds(){

   
        var audioElement = document.getElementById('beep');
        audioElement.play();
        console.log("stop sound 2");
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

            width: window.innerWidth > 400 ? '15%' : '80%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#F5F5F5',
            fontSize: window.innerWidth > 400 ? 12 : 8
        };
        const paperAvatar = {
            height: '20%',
            width: window.innerWidth > 400 ? '30%' : '80%',
            margin: window.innerWidth > 400 ? 20 : 3,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#F5F5F5',
            fontSize: window.innerWidth > 400 ? 12 : 8
        };
        const paperChart = {
            height: '20%',
            width: window.innerWidth > 400 ? '30%' : '80%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#F5F5F5',
            fontSize: window.innerWidth > 400 ? 12 : 8
        };
        const paperMessages = {
            height: '20%',
            width: window.innerWidth > 400 ? '30%' : '80%',
            margin: 20,
            display: 'inline-block',
            backgroundColor: '#F5F5F5',
            fontSize: window.innerWidth > 400 ? 12 : 8
        };
          const paperSchedStuff = {
            height: '20%',
            width: window.innerWidth > 400 ? '30%' : '80%',
            margin: 20,
            display: 'inline-block',
            backgroundColor: '#F5F5F5',
            fontSize: window.innerWidth > 400 ? 12 : 8

        };
        const paperBar = {
            height: '80%',
           width: window.innerWidth > 400 ? '45.5%' : '80%',
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',

            backgroundColor: '#F5F5F5',
            fontSize: window.innerWidth > 400 ? 12 : 8
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
        const { barGraph, initialBarGraph, pieChart, initialPieChart, lineChart, initialLineChart, peopleFeedback, scheduledStuff } = this.props;

        return (
            <div >
                <div>
                    <AppBar title={
                        <div>
                        <FlatButton onClick={this.handleToggle.bind(this)} style={{ marginRight: '2%' }}>
                            <Link to={'/developersBackground'} style={{ textDecoration: 'none', fontSize: window.innerWidth > 400 ? 20 : 12, color: '#ECEFF1', marginRight: 5 }}>Work Experience</Link>
                        </FlatButton>
                        <FlatButton onClick={this.handleToggle.bind(this)} >
                            <Link to={'/userList'} style={{ textDecoration: 'none', fontSize: window.innerWidth > 400 ? 20 : 12, color: '#ECEFF1' }}>CRUD Application</Link>
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
                                    <Link to={'/developersBackground'} style={{ textDecoration: 'none', color: '#424242' }}>Work Experience</Link>
                                </ListItem>

                                <ListItem onClick={this.handleToggle.bind(this)} >
                                    <Link to={'/userList'} style={{ textDecoration: 'none', color: '#424242' }}>CRUD Application</Link>
                                </ListItem>
                                <ListItem onClick={this.handleToggle.bind(this)} style={{ textDecoration: 'none', color: '#424242' }}>Close</ListItem>
                            </List>
                            </div>
                        </Drawer >
                        <Divider />
                    </Card>
                    <Card style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                        <div >
                            <center>

                                <Paper style={paperAvatar} zDepth={1} rounded={false} onClick={this.handleDialogBoxPic.bind(this)}>
                                    <ListItem >
                                        <Avatar src={'https://scontent.cdninstagram.com/t51.2885-19/s150x150/18013186_1884415471815544_5035331559461224448_a.jpg'} size={'60%'} style={{ margin: '5%' }} />
                                        <CardText>
                                            <center>
                                                {window.innerWidth > 400 ? <p>Hi My Name is RC! I am a Full stack web developer and also a UI/UX designer (full stack designer).
                                             I also do motivational talks to some students and companies,
                                              for I believe I have a big part to change this world to a better one ;)
                                            Help me to achieve all of them by showcasing my skills and discover new adventure!

                                        </p>: <p>Hi My Name is RC! Please Enjoy my portfolio using your phone :)</p>
                                            }
                                                
                                            </center>
                                        </CardText>
                                    </ListItem>
                                </Paper>
                                <Paper style={paperSkills} zDepth={1} rounded={false} >
                                    <ListItem onClick={this.handleDialogBoxPic.bind(this)} style={{ textDecoration: 'none', fontSize: '15px', color: '#ECEFF1',backgroundColor: '#29B6F6', marginBottom:10 }}>
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
                                    <ListItem onClick={this.handleDialogBoxPic.bind(this)} style={{ textDecoration: 'none', fontSize: '15px', color: '#ECEFF1',backgroundColor: '#29B6F6', marginBottom:10 }}>
                                        May I know how can I help you base on my overall assesment in website?
                            </ListItem>
                                    <PieChart
                                        //labels={window.innerWidth > 400 ? true : false}
                                        data={this.state.setTimeOutStateDonePie ? pieChart : initialPieChart}
                                        styles={{
                                            '.chart_text': {
                                                fontSize: '2em',
                                                fill: '#fff'
                                            }
                                        }}
                                        innerHoleSize={window.innerWidth > 400 ? window.innerWidth / 10 : window.innerWidth / 5}
                                        size={window.innerWidth > 400 ? window.innerWidth / 4 : window.innerWidth / 2}
                                        mouseOverHandler={this.mouseOverHandlerPie.bind(this)}
                                        mouseOutHandler={this.mouseOutHandlerPie.bind(this)}
                                        mouseMoveHandler={this.mouseMoveHandlerPie.bind(this)}
                                        clickHandler={this.pieClickAnimation.bind(this)}
                                    />
                                    <Legend data={pieChart} dataId={'key'} horizontal />
                                </Paper>
                                <Paper style={paperBar} zDepth={1} rounded={false}>
                                    <ListItem onClick={this.handleDialogBoxPic.bind(this)} style={{ textDecoration: 'none', fontSize: '15px', color: '#ECEFF1',backgroundColor: '#29B6F6', marginBottom:10 }}>
                                        Skills I used to create awesome websites!
                            </ListItem>

                                    <BarChart
                                        colorBars
                                        height={window.innerWidth > 400 ? window.innerHeight / 2 : window.innerHeight / 2.5}
                                        width={window.innerWidth > 400 ? window.innerWidth / 3 : window.innerWidth / 2}
                                        axes={window.innerWidth > 400 ? true : false}
                                        data={this.state.setTimeOutStateDoneBar ? barGraph : initialBarGraph}
                                        margin={window.innerWidth > 400 ? { top: 20, right: 0, bottom: 30, left: 50 } : { top: 20, right: 0, bottom: 30, left: 0 }}
                                        mouseOverHandler={this.mouseOverHandlerBar.bind(this)}
                                        mouseOutHandler={this.mouseOutHandlerBar.bind(this)}
                                        mouseMoveHandler={this.mouseMoveHandlerBar.bind(this)}
                                        clickHandler={this.barClickAnimation.bind(this)}

                                    />
                                     
                                </Paper>
                                <Paper style={paperBar} zDepth={1} rounded={false}>
                                    <ListItem onClick={this.handleDialogBoxPic.bind(this)} style={{ textDecoration: 'none', fontSize: '15px', color: '#ECEFF1',backgroundColor: '#29B6F6', marginBottom:10 }}>
                                        I can do line chart example too!
                            </ListItem>

                                    <LineChart
                                        axes={window.innerWidth > 400 ? true : false}
                                        dataPoints={window.innerWidth > 400 ? true : false}
                                        grid={false}
                                        xDomainRange={[0, 60]}
                                        yDomainRange={[0, 60]}
                                        mouseOverHandler={this.mouseOverHandler.bind(this)}
                                        mouseOutHandler={this.mouseOutHandler.bind(this)}
                                        mouseMoveHandler={this.mouseMoveHandler.bind(this)}
                                        height={window.innerWidth > 400 ? window.innerHeight / 2 : window.innerHeight / 3}
                                        width={window.innerWidth > 400 ? window.innerWidth / 3 : window.innerWidth / 2}
                                        interpolate={'cardinal'}
                                        data={this.state.setTimeoutStateDoneLine ? lineChart : initialLineChart}
                                        axisLabels={{ x: 'Time', y: 'My Mind' }}

                                    />
                                </Paper>
                            </center>
                            <Paper style={paperSchedStuff} zDepth={1} rounded={false}>
                                <List>
                                    <Subheader>Scheduled Stuffs </Subheader>
                                    <Divider />
                                    {scheduledStuff.map((x, index) => {
                                        return (
                                            <div>
                                                <ListItem key={index}
                                                    leftAvatar={<Avatar src={x.imageSource} />}
                                                    rightIconButton={<IconMenu iconButtonElement={<IconButton
                                                        touch={true}
                                                        tooltip="more"
                                                        tooltipPosition="bottom-left"
                                                    >
                                                        <MoreVertIcon color={grey400} />
                                                    </IconButton>}>
                                                       
                                                        <MenuItem>Done</MenuItem>
                                                        <MenuItem>Priority</MenuItem>
                                                         <MenuItem >Canceled</MenuItem>
                                                    </IconMenu>}
                                                    primaryText={x.place}
                                                    secondaryText={
                                                        <p>
                                                            <span style={{ color: darkBlack }}>{x.scheduledTask}</span><br />
                                                            {x.remarks}
                                                        </p> }
                                                    secondaryTextLines={2}
                                                   
                                                />
                                                <Divider inset={true} />
                                            </div>
                                        )})}
                                </List>
                            </Paper>

                            <Paper style={paperMessages} zDepth={1} rounded={false}>
                                <List>
                                    <Subheader>Feedbacks and Comments</Subheader>
                                    <Divider />
                                    {peopleFeedback.map((x, index) => {
                                        return (
                                            <div>
                                            <ListItem key={index}
                                            leftAvatar={<Avatar src={x.imageSource} />}
                                            primaryTogglesNestedList={true}
                                           
                                            primaryText={x.name}
                                            secondaryText={
                                                <p>
                                                    <span style={{ color: darkBlack }}>{x.company}</span><br />
                                                    {x.position}
                                                </p>}
                                            secondaryTextLines={2}
                                             onClick={this.handleDialogBoxMessage.bind(this,x)}
                                        />
                                         <Divider inset={true} />
                                         
                                         <Dialog
                                                title={window.innerWidth > 400 ? "A message from" : "A message from"}
                                                modal={false}
                                                open={this.state.openDialogBoxMessage}
                                                onRequestClose={() => this.setState({openDialogBoxMessage : false})}
                                                autoScrollBodyContent={true}
                                            >
                                                <div style={{ fontSize: window.innerWidth > 400 ? 15 : 10 }}>
                                                    <center>
                                                    <Avatar src={this.state.imageSource}  size={'20%'} style={{ margin: '5%' }}/>
                                                    <h3 style={{ color: darkBlack }}>{this.state.name} <br /> {this.state.company} | {this.state.position}</h3><br />
                                                    "{this.state.feedback}"  
                                                     </center>   
                                                </div>
                                            </Dialog>
                                         </div>
                                        )})}
                                </List>
                            </Paper>
                            <Paper style={paperMessages} zDepth={1} rounded={false}>
                                <Subheader>Priority Interruptions</Subheader>
                                <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
                                <ListItem primaryText="Calls" rightToggle={<Toggle />} />
                                <ListItem primaryText="Messages" rightToggle={<Toggle />} />
                                <ListItem primaryText="Others" rightToggle={<Toggle />} />

                                <Divider />


                                <Subheader>Hangout Notifications</Subheader>
                                <ListItem
                                    leftCheckbox={<Checkbox  onClick={this.sounds.bind(this)}/>}
                                    primaryText="Notifications"
                                    secondaryText="Allow notifications"
                                />
                                <ListItem
                                    leftCheckbox={<Checkbox />}
                                    primaryText="Sounds"
                                    secondaryText="Hangouts message"
                                />
                                <ListItem
                                    leftCheckbox={<Checkbox />}
                                    primaryText="Video sounds"
                                    secondaryText="Hangouts video call"

                                />




                            </Paper>
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

                <Dialog
                    title={window.innerWidth > 400 ? "Hi! Want to know more about me?" : "Hello There !"}
                    modal={false}
                    open={this.state.openDialogBoxPic}
                    onRequestClose={this.handleClose.bind(this)}
                    autoScrollBodyContent={true}
                >
                    <div style={{ fontSize: window.innerWidth > 400 ? 15 : 10 }}>
                        <h4>Contact me at:</h4>
                        <li>(+63) 995 405 7249</li>
                        <li>ralphcharlofabian@yahoo.com</li>
                        <li>https://github.com/ralphcharlofabian</li>
                        <li>https://www.linkedin.com/in/ralph-charlo-fabian-83531aab</li>

                        <p>Online Portfolio:</p>
                        <li>http://rcfabian-static-portfolio.surge.sh</li>
                        <li>http://rcfabian-dynamic-portfolio.surge.sh</li>
                    </div>
                </Dialog>

            </div>
        );
    }
}
export default (SkillSetComponent);