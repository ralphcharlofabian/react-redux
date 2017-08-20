import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutMeComponent from '../component/AboutMe-component';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
class AboutMe extends Component {

    render() {
        const { company } = this.props;
        return (
           
            <div>
                 <AboutMeComponent listOfCompany={company}/>
                
            </div>


        );


    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(duck, dispatch)
}


function mapStateToProps(state) {
    
    return {
        company: state.company
    }
}

export default connect(mapStateToProps, matchDispatchToProps) (AboutMe);