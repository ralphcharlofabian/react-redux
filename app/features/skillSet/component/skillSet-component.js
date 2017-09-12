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
//import 'react-infinite-calendar/styles.css';
import Dialog from 'material-ui/Dialog';
class SkillSetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            stepIndex: 0,
            openSnackBarClicked:false,
             showToolTip: false,
            top: null,
            left: null,
            y: null,
            x: null,
            openSnackBarClickedBar:false,
            openSnackBarClickedPie:false,
            openDialogBox:false,
            setTimeOutStateDoneBar :false,
            setTimeOutStateDonePie :false,
            setTimeoutStateDoneLine:false
        }
    }

componentDidMount() {
    setTimeout(
      () =>  this.setState({ setTimeOutStateDoneBar: true,
        setTimeOutStateDonePie : true,
    setTimeoutStateDoneLine:true }),
      500
    );
  }
    pieClickAnimation() {
    this.setState({setTimeOutStateDonePie: false});
    setTimeout(
      () =>  this.setState({setTimeOutStateDonePie : true }),
      500
    );
  }
 barClickAnimation() {
    this.setState({setTimeOutStateDoneBar: false});
    setTimeout(
      () =>  this.setState({setTimeOutStateDoneBar : true }),
      500
    );
  }
    handleDialogBox(event) {
        this.setState({ openDialogBox: true });
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
             openSnackBarClicked:true
        });
    }

    mouseMoveHandler(e) {
        if (this.state.showToolTip) {
            this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px`,openSnackBarClicked:true });
        }
    }
  mouseOutHandler() {
        this.setState({ showToolTip: false,
        openSnackBarClicked:false });
    }

mouseMoveHandlerBar(e) {
        if (this.state.showToolTip) {
            this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px`,openSnackBarClickedBar:true });
        }
    }
    mouseOutHandlerBar() {
        this.setState({ showToolTip: false,
        openSnackBarClickedBar:false });
    }

handleClose(){
    this.setState({openDialogBox: false});
  };
    mouseOverHandlerBar(d, e) {
        this.setState({
             openSnackBarClickedBar:true});
    }

 
mouseMoveHandlerPie(e) {
        if (this.state.showToolTip) {
            this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px`,openSnackBarClickedPie:true });
        }
    }
    mouseOutHandlerPie() {
        this.setState({ showToolTip: false,
        openSnackBarClickedPie:false });
    }


    mouseOverHandlerPie(d, e) {
        this.setState({
             openSnackBarClickedPie:true});
    } 

    
handleRequestClose() {
    this.setState({
      openSnackBarClicked: false,
      openSnackBarMouseHoverBar:false
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
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#F5F5F5'
        };
        const paperAvatar = {
            height: '20%',
            width: '30%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#F5F5F5'
        };
        const paperChart = {
            height: '20%',
            width: '30%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#F5F5F5'
        };

        const paperBar = {
            height: '80%',
            width: '80%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            backgroundColor: '#F5F5F5'
        };


        const imageSize = { padding: '2%', width: '30%', height: '20%', display: 'inline-block' };
        const{barGraph,initialBarGraph,pieChart,initialPieChart,lineChart,initialLineChart}=this.props;
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
                        style={{ backgroundColor: '#00B0FF' }} />
                </div>
                <Card style={{ backgroundColor: '#ECEFF1' }}>
                    <Drawer open={this.state.open}>
                        <Avatar src={'https://scontent.cdninstagram.com/t51.2885-19/s150x150/18013186_1884415471815544_5035331559461224448_a.jpg'} size={210} style={{ margin: 20 }} />
                        <Divider style={{ marginTop: 10 }} />
                        <Card style={{ textDecoration: 'none', color: '#424242' }}>
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
                                <Link to={'/developersBackground'} style={{ textDecoration: 'none', color: '#424242' }}>Work Experience</Link>
                            </ListItem>

                            <ListItem onClick={this.handleToggle.bind(this)} >
                                <Link to={'/userList'} style={{ textDecoration: 'none', color: '#424242' }}>CRUD Application</Link>
                            </ListItem>
                            <ListItem onClick={this.handleToggle.bind(this)} style={{ textDecoration: 'none', color: '#424242' }}>Close</ListItem>
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
                                    data={this.state.setTimeOutStateDonePie ? pieChart : initialPieChart}
                                    styles={{
                                        '.chart_text': {
                                            fontSize: '2em',
                                            fill: '#fff'
                                        }
                                    }}
                                    innerHoleSize={80}
                                    size={window.innerWidth/4}
                                     mouseOverHandler={this.mouseOverHandlerPie.bind(this)}
                                    mouseOutHandler={this.mouseOutHandlerPie.bind(this)}
                                    mouseMoveHandler={this.mouseMoveHandlerPie.bind(this)}
                                     clickHandler = {this.pieClickAnimation.bind(this)}
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
                                    data={this.state.setTimeOutStateDoneBar ? barGraph : initialBarGraph}
                                    margin={{ top: 20, right: 0, bottom: 30, left: 50 }}
                                    mouseOverHandler={this.mouseOverHandlerBar.bind(this)}
                                    mouseOutHandler={this.mouseOutHandlerBar.bind(this)}
                                    mouseMoveHandler={this.mouseMoveHandlerBar.bind(this)}
                                    clickHandler = {this.barClickAnimation.bind(this)}

                                />
                            </Paper>
                            <Paper style={paperBar} zDepth={1} rounded={false}>
                                <ListItem>
                                     I can do line chart example too! 
                            </ListItem>

                                <LineChart
                                    axes
                                    dataPoints = {true}
                                    grid ={false}
                                    xDomainRange={[0, 60]}
                                    yDomainRange={[0, 60]}
                                    mouseOverHandler={this.mouseOverHandler.bind(this)}
                                    mouseOutHandler={this.mouseOutHandler.bind(this)}
                                    mouseMoveHandler={this.mouseMoveHandler.bind(this)}
                                    width={700}
                                    height={350}
                                    interpolate={'cardinal'}
                                    data={this.state.setTimeoutStateDoneLine ? lineChart : initialLineChart}
                                    axisLabels={{x: 'Time', y: 'My Mind'}}
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
                     <Dialog
          title="Dialog With Actions"
          
          modal={false}
          open={this.state.openDialogBox}
          onRequestClose={this.handleClose.bind(this)}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
            </div>
        );
    }
}
export default (SkillSetComponent);