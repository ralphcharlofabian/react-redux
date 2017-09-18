import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillSetComponent from '../component/skillSet-component';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
class SkillSet extends Component {

    render() {
           const { barGraph,initialBarGraph,pieChart, initialPieChart,lineChart,initialLineChart,peopleFeedback,scheduledStuff} = this.props;
        return (
           
            <div>
                 <SkillSetComponent
                 barGraph ={barGraph}
                 initialBarGraph={initialBarGraph}
                 initialPieChart={initialPieChart}
                 pieChart={pieChart}
                 lineChart={lineChart}
                 initialLineChart={initialLineChart}
                 peopleFeedback={peopleFeedback}
                 scheduledStuff={scheduledStuff}/>
                
            </div>


        );


    }
}
// function matchDispatchToProps(dispatch) {
//     console.log(duck,'duck')
//     return bindActionCreators(duck, dispatch)
// }


function mapStateToProps(state) {
    console.log(state,'mapStateToProps')
    return {
        barGraph: state.barGraph,
        initialBarGraph:state.initialBarGraph,
        initialPieChart:state.initialPieChart,
    pieChart:state.pieChart,
    lineChart:state.lineChart,
    initialLineChart:state.initialLineChart,
    peopleFeedback:state.peopleFeedback,
    scheduledStuff:state.scheduledStuff
    };
}

export default connect(mapStateToProps) (SkillSet);