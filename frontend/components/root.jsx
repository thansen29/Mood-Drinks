import React from 'react';
import { Route } from 'react-router-dom';
import App from './app';
import DrinkShow from './drinks/drink_show';

const Root = () => (
    <div>
        <Route path="/" component={ App }></Route>
    </div>
);

export default Root;
