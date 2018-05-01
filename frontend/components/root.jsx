import React from 'react';
import { Route } from 'react-router-dom';
import App from './app';
import DrinkShow from './drinks/drink_show';

const Root = () => (
    <div>
        <Route exact path="/" component={ App }></Route>
        <Route path="/drink/:id" component={ DrinkShow }></Route>
    </div>
);

export default Root;
