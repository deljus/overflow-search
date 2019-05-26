import React, { createElement } from 'react';
import { Switch, Route } from 'react-router'

import { map } from 'lodash';

function RoutePages({ routes, ...rest }) {

    const renderRoute = ({ path, component, ...rest }) => (
        <Route
            exact
            path={path}
            render={(props) => createElement(component, { ...props, ...rest })} />
    );

    return (
            <Switch>
                { map(routes, renderRoute) }
            </Switch>
    );
}

export default RoutePages;
