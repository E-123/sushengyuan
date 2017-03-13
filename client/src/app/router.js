import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Layout, Home, Login, Register, Protector, LayoutWithBar, Present, BetterFood, IsComing, Ingredients, IngredientsCategory, IngredientsDetail, Clock} from './containers';

function lazyLoadComponent(lazyModule) {
  return (location, cb) => {
    lazyModule(module => {
      cb(null, module.default);
    });
  };
}

export default ({history}) => (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
        	<IndexRoute component={Home} />
            <Route path="index" component={Home} />
	        <Route path="login" component={Login} />
	        <Route path="register" component={Register} />
        </Route>
        <Route path="/" component={LayoutWithBar}>
        	<Route path="protector" component={Protector} />
            <Route path="present" component={Present} />
            <Route path="betterfood" component={BetterFood} />
            <Route path="isComing" component={IsComing} />
            <Route path="ingredients" component={Ingredients} />
            <Route path="clock" component={Clock} />
            <Route path="ingredients/:category" component={IngredientsCategory} />
            <Route path="ingredients/:category/:name" component={IngredientsDetail} />
        </Route>
    </Router>
);
