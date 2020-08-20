import React from 'react';
import {Route} from 'react-router-dom';

import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader />
            <Route path="/" component={MainPage} exact />
            <Route path="/cart" component={CartPage} exact/>
            <Route path="/menu/:id" component={ItemPage} exact/>
        </div>
    )
}

export default App;