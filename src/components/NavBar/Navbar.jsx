import React from 'react';
import { Link } from 'react-router-dom';
import { map, uniqueId } from 'lodash';
import PropTypes from 'prop-types';

import './navbar.css';

function Navbar({ items }){

    const renderNavs = ({ name, path }) => (
        <li key={uniqueId('nav_')}><Link to={path}>{name}</Link></li>
    );

    return(
        <ul className="navbar">
            { map(items, renderNavs) }
        </ul>
    )
}

Navbar.propTypes = {
    items: PropTypes.array,
};

Navbar.defaultProps = {
    items: [],
};

export default Navbar;
