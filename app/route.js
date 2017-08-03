import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import UserDetail from './features/userDetail/container/user-detail';
import UserList from './features/UserList/container/user-list'
import App from './app';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import store from './store';


const history = syncHistoryWithStore(browserHistory, store);
export default () => {
    return (
        <Router history={history}>
            <Route path={'/'} component={App} >
                <IndexRoute component={UserList} />
            </Route>
            <Route path={'/:id'} component={UserDetail} />
        </Router>
    )
}
