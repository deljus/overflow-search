import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

function Layout({ children }) {
    return(
        <div className="main">
            <header>

            </header>
            <main className="main-content" >
                <div className="main-container">
                    { children }
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
