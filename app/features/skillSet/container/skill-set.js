import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillSetComponent from '../component/skillSet-component';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
class SkillSet extends Component {

    render() {
           const { barGraph,initialBarGraph } = this.props;
        return (
           
            <div>
                 <SkillSetComponent
                 barGraph ={barGraph}
                 initialBarGraph={initialBarGraph}/>
                
            </div>


        );


    }
}
// function matchDispatchToProps(dispatch) {
//     console.log(duck,'duck')
//     return bindActionCreators(duck, dispatch)
// }


function mapStateToProps(state) {
    console.log(state.barGraph,'xxxxxx')
    return {
        barGraph: state.barGraph,
        initialBarGraph:state.initialBarGraph
    };
}

export default connect(mapStateToProps) (SkillSet);