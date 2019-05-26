import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

function Layout({ children, header }) {
    return(
        <div className="main">
            <header>
                <div className="main-container">
                    { header }
                </div>
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
    header: PropTypes.oneOfType(PropTypes.string, PropTypes.node)
};

export default Layout;
