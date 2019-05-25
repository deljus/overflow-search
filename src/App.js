import React from 'react';
import { Provider } from 'react-redux';

import store from 'core/store';
import { RenderRoutes } from 'helpers';
import { routes } from './config';
import { Layout } from 'components'

function App() {
    return(
        <Provider store={store}>
            <Layout>
                <RenderRoutes routes={routes}/>
            </Layout>
        </Provider>
    )

}

export default App;
