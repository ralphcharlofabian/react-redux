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

class AboutMeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            stepIndex: 0,
        }
    }

     handleNext() {
    const {stepIndex} = this.state;
    if (stepIndex < 4) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext.bind(this)}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev.bind(this)}
          />
        )}
      </div>
    );
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
            <div>
                <div>
                  
                    <AppBar title={<div>
                        <FlatButton onClick={this.handleToggle.bind(this)} style={{marginRight:'2%'}}>
                            <Link to={'/'} style={{ textDecoration: 'none', fontSize: '20px',color: '#ECEFF1' }}>Skill Set</Link>
                        </FlatButton>
                        <FlatButton onClick={this.handleToggle.bind(this)} >
                            <Link to={'/userList'} style={{ textDecoration: 'none', fontSize: '20px',color: '#ECEFF1' }}>CRUD Application</Link>
                        </FlatButton>
                    </div>}
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
                </div>
                <Card style={{backgroundColor:'#ECEFF1'}}>
                    <CardText>
                        Some of Experience and skill learned as I walk to the path of greatness.
                        Learning's was Everything and I want to explore the world, Fuse my passion and my skills as one.
                        I believe that there are many things I can share and contribute to this world.
                        And I have a vision for this vision will lead me to far beyond imagination,
                        Making this vision to reality. "Pursue for greatness for success will follow"
                    </CardText>
                    <Drawer open={this.state.open}>
                        <Avatar src={'https://scontent.cdninstagram.com/t51.2885-19/s150x150/18013186_1884415471815544_5035331559461224448_a.jpg'} size={210} style={{ margin: 20 }} />
                        <Divider style={{ marginTop: 10 }} />
                        <Card style={{ textDecoration: 'none',color: '#424242'  }}>
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
                        <Link to={'/'} style={{ textDecoration: 'none',color: '#424242'  }}>My Skill Set</Link>
                        </ListItem>
                        <ListItem onClick={this.handleToggle.bind(this)} >
                        <Link to={'/userList'} style={{ textDecoration: 'none',color: '#424242'  }}>CRUD Application</Link>
                        </ListItem>
                        <ListItem onClick={this.handleToggle.bind(this)} style={{ textDecoration: 'none',color: '#424242'  }}>Close</ListItem>
                        </List>
                        
                    </Drawer >
                    <Divider />
                  



                     
                   


                </Card>

<Card expanded={true}>    
     <CardText>                                    
<div style={{maxWidth: '70%', maxHeight: '80%', margin: 'auto'}}>
        <Stepper
          activeStep={this.state.stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              <CardHeader
                    title="Mapua Institute of Technology"
                    subtitle="BS Computer Engineer"
                    avatar="http://www.gdap.org.ph/assets/logos/mapua.png"
                    />
            </StepButton>
            <StepContent>
              <p>
              Create hardware and software based prototype as well as documentation.
              Experienced many hardship to pass the subject and develop an early maturity to be a professional.
              Develop softskills and baseskills t obe used in IT field focusing on software engineering and the like.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
               <CardHeader
                    title="Denso Techno PHilippines Inc."
                    subtitle="Software Engineer | Oct 2012 – Apr 2015"
                    avatar="http://www.jobhero.ph/media/emp/emp_4228.jpg"
                    />
            </StepButton>
            <StepContent>
              <p>Capable of code manipulation and debugging base on the specifications sent by Denso Japan (codes written in Japanese).
                Interact with Japanese managers regarding the project to be tested.
                Supervise all testing activities carried out by the team and identify member who need for further training.</p>
                <p>Skills and Achievent HIghlights</p>
                <li>Jtest Passer (N3 level 2013)</li>
                <li>Language used C++, C language as well as Assembly language and Embedded C</li>
                <li>Assigned to handle lower batch, Conduct training and supervise the whole team.</li>
                <li>Schedule testing activities and prepare test effort estimations.</li>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              <CardHeader
                    title="First Academy of Computer Art"
                    subtitle="Multimedia | 2014 – 2015"
                    avatar="http://i113.photobucket.com/albums/n209/komikon/FACALOGO.jpg"
                    />
            </StepButton>
            <StepContent>
              <p>
                Embracing the world of art and creating a new horizon in the path of multimedia.
                Focusing on User Interface and User Experience that will be able to use in web development.
                Understand concepts and untilize UI/UX skills as a fullstack Designer (UI/UX to front end Developer).
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
               <CardHeader
                    title="Smart Telecommunication Inc."
                    subtitle="Software Test Engineer | Apr 2015 – Sept 2016"
                    avatar="http://newsinfo.inquirer.net/wp-content/blogs.dir/10/files/2016/06/pldt-smart-logo-e1490815989858.jpg"
                    />
            </StepButton>
            <StepContent>
              <p>
               Capable of designing test suites and have the ability to understand usability issues.
            Interact with the Project Manager and Developer as well as third party regarding the project handled.
            Develop test cases and prioritize testing activities.
            Execute all the test case and report defects, define severity and priority for each defect.
              </p>
               <p>HIghlights (Main Tester of the project listed below:)</p>
                    <li>Talk ‘N Text Aldub promo</li>
                    <li>E-Games Projects (Google play)</li>
                    <li>Jollibee’s #87000 Delivery Upgrade Projects</li>
                    <li>SurfpaTEXTival Projects</li>
                    <li>Lucky Me Projects</li>	
                     Project listed are launch to media.
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
           <Step>
            <StepButton onClick={() => this.setState({stepIndex: 4})}>
              <CardHeader
                    title="Bizbox Inc."
                    subtitle="Fullstack Web Developer | Oct 2016 – Present"
                    avatar="https://siva.jsstatic.com/ph/15620/images/banner/15620_banner_0_334839.jpg"
                    />
            </StepButton>
            <StepContent>
              <p>
                Develop functional and bug-free codes base on Project Backlog Items. Apply the concept of KISS,
                 SRP and other code guidelines for better and easy to read code.
                 Manipulate existing codes base of additional features without resulting to bug.
                  Respond and Prioritize bug fixing than other task given.
              </p>
              <p>Skills and Achievent HIghlights</p>
                <li>Integrate QR code scanner to the system</li>
                <li>Extract data from website to Microsoft Excel</li>
                <li>Create print preview based on user inputs.</li>
                <li>Graph presentation and data computation of vital signs.</li>
                <li>Image editing (like online Photoshop) on web canvas.</li>
                <li>Internationalization functionalities</li>
                <li>Integrate Download an Upload functionalities to the system</li>
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
       </CardText>
      </Card>        
            </div>
        );
    }
}
export default (AboutMeComponent);