import React from 'react';
import {Route} from 'react-router-dom';

import {MainPage, CartPage} from '../pages';
import WithRestoService from '../hoc';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    console.log(RestoService.getMenuItems());
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Route path="/menu" component={MainPage} />
            <Route path="/cart" component={CartPage} />
        </div>
    )
}

export default WithRestoService()(App);