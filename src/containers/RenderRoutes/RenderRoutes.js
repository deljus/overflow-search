import React, { createElement } from 'react';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';

import { map } from 'lodash';

function RoutePages({ routes, ...rest }) {

    const renderRoute = ({ path, component, ...rest }) => (
        <Route
            exact
            path={path}
            render={(props) => createElement(component, { ...props, ...rest })} />
    );

    return (
        <BrowserRouter>
            <Switch>
                { map(routes, renderRoute) }
            </Switch>
        </BrowserRouter>
    );
}

export default RoutePages;
