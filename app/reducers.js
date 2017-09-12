import { combineReducers } from 'redux';
import { rawData } from './features/userList/duck';
import { ActiveUserReducer } from './features/userDetail/duck';
import {ActiveUserListReducer} from './features/userList/duck';
import { routerReducer } from 'react-router-redux';
import {rawDataCompany} from './features/aboutDeveloper/duck';
import {barGraph,initialBarGraph} from './features/skillSet/duck';
const allReducers = combineReducers({
    users: rawData,
    activeUser: ActiveUserReducer,
    activeUserList:ActiveUserListReducer,
    routing : routerReducer,
    company : rawDataCompany,
    barGraph:barGraph,
    initialBarGraph:initialBarGraph
});

export default allReducers;