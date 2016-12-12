import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {Layout, Home, Login, Register, Protector, LayoutWithBar, Present} from './containers';

export default ({history}) => (
    <Router history={history}>
        <Route path="/" component={Layout}>
        	<IndexRoute component={Home} />
	        <Route path="index" component={Home} />
	        <Route path="login" component={Login} />
	        <Route path="register" component={Register} />
        </Route>
        <Route path="/" component={LayoutWithBar}>
        	<Route path="protector" component={Protector} />
            <Route path="present" component={Present} />
        </Route>
    </Router>
);
