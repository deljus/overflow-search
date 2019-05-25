import React from 'react';
import PropTypes from 'prop-types';

import './loader.css';

function Loader({ loading, children }) {
    return(
        <div className={`loader ${ loading ? 'loading' : '' }`}>
            <div className="spiner-wrapper">
                <div className="spiner" />
            </div>
            { children }
        </div>
    )
}

Loader.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node,
};

Loader.defaultProps = {
    loading: false
};

export default Loader;
