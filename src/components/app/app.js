import React from 'react';
import {Route} from 'react-router-dom';

import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Route path="/" component={MainPage} exact />
            <Route path="/cart" component={CartPage} />
        </div>
    )
}

export default App;