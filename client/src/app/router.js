import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Layout, Home, Login, Register, Protector, LayoutWithBar, Present, BetterFood, IsComing, Ingredients, IngredientsCategory, IngredientsDetail} from './containers';

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
        	<IndexRoute getComponent={lazyLoadComponent(Home)} />
            <Route path="index" getComponent={lazyLoadComponent(Home)} />
	        <Route path="login" getComponent={lazyLoadComponent(Login)} />
	        <Route path="register" getComponent={lazyLoadComponent(Register)} />
        </Route>
        <Route path="/" component={LayoutWithBar}>
        	<Route path="protector" getComponent={lazyLoadComponent(Protector)} />
            <Route path="present" getComponent={lazyLoadComponent(Present)} />
            <Route path="betterfood" getComponent={lazyLoadComponent(BetterFood)} />
            <Route path="isComing" getComponent={lazyLoadComponent(IsComing)} />
            <Route path="ingredients" getComponent={lazyLoadComponent(Ingredients)} />
            <Route path="ingredients/:category" component={IngredientsCategory} />
            <Route path="ingredients/detail/:name" component={IngredientsDetail} />
        </Route>
    </Router>
);
