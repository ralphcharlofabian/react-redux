import { combineReducers } from 'redux';
import { rawData } from './features/userList/duck';
import { ActiveUserReducer } from './features/userDetail/duck';
import {ActiveUserListReducer} from './features/userList/duck';
import { routerReducer } from 'react-router-redux';
import {rawDataCompany} from './features/aboutDeveloper/duck';
import {imageData} from './features/skillSet/duck';
const allReducers = combineReducers({
    users: rawData,
    activeUser: ActiveUserReducer,
    activeUserList:ActiveUserListReducer,
    routing : routerReducer,
    company : rawDataCompany,
    imageData :imageData
});

export default allReducers;