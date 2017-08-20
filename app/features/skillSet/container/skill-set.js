import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillSetComponent from '../component/skillSet-component';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
class SkillSet extends Component {

    render() {
        const { company } = this.props;
        return (
           
            <div>
                 <SkillSetComponent/>
                
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

export default connect(mapStateToProps, matchDispatchToProps) (SkillSet);