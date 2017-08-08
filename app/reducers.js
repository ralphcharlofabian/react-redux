import { combineReducers } from 'redux';
import { rawData } from './features/userList/duck';
import { ActiveUserReducer } from './features/userDetail/duck';
import {ActiveUserListReducer} from './features/userList/duck';
import { routerReducer } from 'react-router-redux';

const allReducers = combineReducers({
    users: rawData,
    activeUser: ActiveUserReducer,
    activeUserList:ActiveUserListReducer,
    routing : routerReducer
});

export default allReducers;