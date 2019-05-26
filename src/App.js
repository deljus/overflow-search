import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'core/store';
import { routes } from './config';
import { Layout, NavBar } from 'components'
import { FetchError, RenderRoutes } from 'containers';

function App() {
    return(
        <Provider store={store}>
            <FetchError />
                <BrowserRouter>
                    <Layout
                        header={<NavBar items={[routes.index]}/>}
                    >
                        <RenderRoutes routes={routes} />
                    </Layout>
                </BrowserRouter>
        </Provider>
    )

}

export default App;
