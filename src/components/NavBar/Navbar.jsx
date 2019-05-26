import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import PropTypes from 'prop-types';

import './navbar.css';

function Navbar({ items }){

    const renderNavs = ({ name, path }) => (
        <li><Link to={path}>{name}</Link></li>
    );

    return(
        <ui className="navbar">
            { map(items, renderNavs) }
        </ui>
    )
}

Navbar.propTypes = {
    items: PropTypes.array,
};

Navbar.defaultProps = {
    items: [],
};

export default Navbar;
