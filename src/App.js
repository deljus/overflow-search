import React from 'react';
import { Provider } from 'react-redux';

import store from 'core/store';
import { routes } from './config';
import { Layout } from 'components'
import { FetchError, RenderRoutes } from 'containers';

function App() {
    return(
        <Provider store={store}>
            <FetchError />
            <Layout>
                <RenderRoutes routes={routes}/>
            </Layout>
        </Provider>
    )

}

export default App;
