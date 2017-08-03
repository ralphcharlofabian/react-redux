import { combineReducers } from 'redux';
import { rawData } from './features/userList/duck';
import { ActiveUserReducer } from './features/userDetail/duck';
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
    users: rawData,
    activeUser: ActiveUserReducer,
    routing : routerReducer
});

export default allReducers;