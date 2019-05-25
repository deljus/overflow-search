import React from 'react';
import { RenderRoutes } from 'helpers';
import { routes } from './config';
import { Layout } from 'components'

function App() {
    return(
        <Layout>
            <RenderRoutes routes={routes}/>
        </Layout>
    )

}

export default App;
