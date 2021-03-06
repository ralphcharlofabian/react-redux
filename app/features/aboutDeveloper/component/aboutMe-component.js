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
import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';
class AboutMeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      stepIndex: 0,
      opacity:0
    }
  }
 componentDidMount() {
        setTimeout(
            () => this.setState({
               
                opacity:1
            }),
            200
        );
    }
  handleNext() {
    const { stepIndex } = this.state;
    if (stepIndex < 5) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev() {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    return (
      <div style={{ margin: '12px 0' }}>
        {step < 5 && (<RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext.bind(this)}
          style={{ marginRight: 12 }}
        />)}
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
      <div>
        <div>

          <AppBar title={<div>
            <FlatButton onClick={this.handleToggle.bind(this)} style={{ marginRight: '2%' }}>
              <Link to={'/'} style={{ textDecoration: 'none', fontSize: window.innerWidth > 400 ? 20 : 12, color: '#ECEFF1',marginRight:5 }}>Skill Set</Link>
            </FlatButton>
            <FlatButton onClick={this.handleToggle.bind(this)} >
              <Link to={'/userList'} style={{ textDecoration: 'none', fontSize: window.innerWidth > 400 ? 20 : 12, color: '#ECEFF1',marginRight:5 }}>CRUD Application</Link>
            </FlatButton>
          </div>}
            onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
             style={{ backgroundColor: blue600 }} />
        </div>
        <Card style={{ backgroundColor: '#ECEFF1' }}>
          <CardText>
            Some of Experience and skill learned as I walk to the path of greatness.
                        Learning's was Everything and I want to explore the world, Fuse my passion and my skills as one.
                        I believe that there are many things I can share and contribute to this world.
                        And I have a vision for this vision will lead me to far beyond imagination,
                        Making this vision to reality. "Pursue for greatness for success will follow"
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
                                    <Link to={'/userList'} style={{ textDecoration: 'none', color: '#ECEFF1' }}>CRUD Application</Link>
                                </ListItem>
                                <ListItem onClick={this.handleToggle.bind(this)} style={{ textDecoration: 'none', color: '#ECEFF1' }}>Close</ListItem>
                            </List>
                        </div>
                    </Drawer >
          <Divider />








        </Card>

        <Card expanded={true} >
          <CardText>
            <div style={{ maxWidth: '70%', maxHeight: '80%', margin: 'auto',opacity: this.state.opacity, transition: "opacity 1s" }}>
              <Stepper
                activeStep={this.state.stepIndex}
                linear={false}
                orientation="vertical"
              >
                <Step>
                  <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                    <CardHeader
                      title={window.innerWidth > 400 ? "Bizbox Inc." : "Bizbox Inc."}
                      subtitle= {window.innerWidth > 400 ? "Fullstack Web Developer | Oct 2016 – Present" : "Developer"}
                      avatar="https://siva.jsstatic.com/ph/15620/images/banner/15620_banner_0_334839.jpg"
                    />
                  </StepButton>
                  <StepContent style={{fontSize: window.innerWidth > 400 ? 15 : 12}}>
                    <p>
                      Develop functional and bug-free codes base on Project Backlog Items. Apply the concept of KISS,
                 SRP and other code guidelines for better and easy to read code.
                 Manipulate existing codes base of additional features without resulting to bug.
                  Respond and Prioritize bug fixing than other task given.
              </p>
                    <p>Front End</p>
                    <li>Developed application using React.js</li>
                    <li>Proficient in Redux concept and apply to React.js</li>
                    <li>Exposed in ES6 javascript</li>
                    <li>Developed application using Angular.js</li>
                    <li>Proficient in using Angular.js framework.</li>
                    <li>Maximized the use of controller, directive, filter, service, and component.</li>
                    <li>Wrote unit test using Jasmine.</li>
                    <li>Maximized the use of dependency package manager such as Bower/npm.</li>
                    <li>Used css pre-processor such as LESS.</li>
                    <li>Exposed in Scrum methodologies.</li>

                    <p>Back End</p>
                    <li>Experienced using .net Web API framework.</li>
                    <li>Experienced using Entity Framework 6, Linq.</li>
                    <li>Exposed in SOLID principle.</li>
                    <li>Developed Restful API</li>
                   
                    <p>Skills and Achievent HIghlights</p>
                    <li>Integrate QR code scanner to the system</li>
                    <li>Extract data from website to Microsoft Excel</li>
                    <li>Create print preview based on user inputs.</li>
                    <li>Graph presentation and data computation of vital signs.</li>
                    <li>Image editing (like online Photoshop) on web canvas.</li>
                    <li>Internationalization functionalities</li>
                    <li>Integrate Download an Upload functionalities to the system</li>
                    {this.renderStepActions(0)}
                  </StepContent>
                </Step>
                <Step>
                  <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                    <CardHeader
                      title={window.innerWidth > 400 ? "Smart Telecommunication Inc." : "Smart Telco."}
                      subtitle={window.innerWidth > 400 ? "Software Engineer | Apr 2015 – Sept 2016" : "Software Engr."}
                      avatar="http://newsinfo.inquirer.net/wp-content/blogs.dir/10/files/2016/06/pldt-smart-logo-e1490815989858.jpg"
                    />
                  </StepButton>
                  <StepContent style={{fontSize: window.innerWidth > 400 ? 15 : 12}}>
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
              {this.renderStepActions(1)}
                  </StepContent>
                </Step>
                <Step>
                  <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                    <CardHeader
                      title={window.innerWidth > 400 ? "First Academy of Computer Art" : "FACA"}
                      subtitle={window.innerWidth > 400 ? "Multimedia | 2014 – 2015" : "MAS"}
                      avatar="http://i113.photobucket.com/albums/n209/komikon/FACALOGO.jpg"
                    />
                  </StepButton>
                  <StepContent style={{fontSize: window.innerWidth > 400 ? 15 : 12}}>
                    <p>
                      Embracing the world of art and creating a new horizon in the path of multimedia.
                Focusing on User Interface and User Experience that will be able to use in web development.
                Understand concepts and untilize UI/UX skills as a fullstack Designer (UI/UX to front end Developer).
              </p>
                    {this.renderStepActions(2)}
                  </StepContent>
                </Step>
                <Step>
                  <StepButton onClick={() => this.setState({ stepIndex: 3 })}>
                    <CardHeader
                      title={window.innerWidth > 400 ? "Denso Techno PHilippines Inc." : "DTPH"}
                      subtitle={window.innerWidth > 400 ? "Software Engineer | Oct 2012 – Apr 2015" : "Software Engr."}
                      avatar="http://www.jobhero.ph/media/emp/emp_4228.jpg"
                    />
                  </StepButton>
                  <StepContent style={{fontSize: window.innerWidth > 400 ? 15 : 12}}>
                    <p>Capable of code manipulation and debugging base on the specifications sent by Denso Japan (codes written in Japanese).
                Interact with Japanese managers regarding the project to be tested.
                Supervise all testing activities carried out by the team and identify member who need for further training.</p>
                    <p>Skills and Achievent HIghlights</p>
                    <li>Jtest Passer (N3 level 2013)</li>
                    <li>Language used C++, C language as well as Assembly language and Embedded C</li>
                    <li>Assigned to handle lower batch, Conduct training and supervise the whole team.</li>
                    <li>Schedule testing activities and prepare test effort estimations.</li>
                    {this.renderStepActions(3)}
                  </StepContent>
                </Step>
                <Step>
                  <StepButton onClick={() => this.setState({ stepIndex: 4 })}>
                    <CardHeader
                      title= {window.innerWidth > 400 ? "Mapua Institute of Technology" : "MAPUA"}
                      subtitle={window.innerWidth > 400 ? "BS Computer Engineer": "Comp. Engr"}
                      avatar="http://www.gdap.org.ph/assets/logos/mapua.png"
                    />
                  </StepButton>
                  <StepContent style={{fontSize: window.innerWidth > 400 ? 15 : 12}}>
                    <p>
                      Create hardware and software based prototype as well as documentation.
              Experienced many hardship to pass the subject and develop an early maturity to be a professional.
              Develop softskills and baseskills t obe used in IT field focusing on software engineering and the like.
              </p>
                    {this.renderStepActions(4)}
                  </StepContent >
                </Step>
<Step>
                  <StepButton onClick={() => this.setState({ stepIndex: 5 })}>
                    <CardHeader
                      title="Milestones"
                      subtitle={window.innerWidth > 400 ? "Achievements | Certificates | Training Attended | Seminars Conducted" : "Others"}
                      avatar="https://image.flaticon.com/icons/png/128/179/179249.png"
                    />
                  </StepButton>
                  <StepContent style={{fontSize: window.innerWidth > 400 ? 15 : 12}}>
                    <p>
                     Hi! This part is more about my personal achievements and milestones as I climb to the mountain of success and awesomeness!
              </p>
              <p>Milestones and Achievements</p>
               <li>Complete Ionic.Js Training (June 24,2017)</li>
                    <li>Became Main Test Engineer for Smart Telco (2015) </li>
                    <li>Finish Multimedia Arts (2014-2015)</li>
                    <li>Trainer/TL for lower batch at Denso (2014-2015)</li>
                    <li>Japanese Language Test passer N4 level (2014)</li>
                     <li>Undergo Cisco training on Mapua 1-4 (2011-2013)</li>
                     <li>Elected as Project Comm in JPCS-MIT(2013)</li>
                     <li>Elected as Sports Comm in JPCS-MIT(2012)</li>
                     <li>... working for it</li>

                     <p>Seminars/trainings successfully conducted</p>
                    <li>Into the mind of a fullstack web developer (Aug. 18,2017)</li>
                    <li>	Talk on industry trends/ IT trends (Mar. 23, 2017) </li>
                    <li>	Creating a simple website (Aug.19, 2016)</li>
                    <li>	Concept behind Web Development (Aug. 18, 2016)</li>
                    <li>	Basic Animation (May 22, 2015)</li>
                     <li>... still doing it</li>
                    {this.renderStepActions(5)}
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