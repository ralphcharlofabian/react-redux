import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillSetComponent from '../component/skillSet-component';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
class SkillSet extends Component {

    render() {
           const { imageData } = this.props;
       
        return (
           
            <div>
                {console.log(imageData,'inside')}
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
        imageData: state.imageData
    };
}

export default connect(mapStateToProps, matchDispatchToProps) (SkillSet);