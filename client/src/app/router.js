/**
 * @file demo 路由配置
 * @author hancong
 * @date 2016-10-25
 */

import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {Layout, Home, Login, Register} from './containers';

export default ({history}) => (
    <Router history={history}>
        <Route path="/" component={Layout}>
        	<IndexRoute component={Home} />
	        <Route path="index" component={Home} />
	        <Route path="login" component={Login} />
	        <Route path="register" component={Register} />
        </Route>
    </Router>
);
