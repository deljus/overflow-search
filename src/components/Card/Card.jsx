import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

function Card({ title, renderTitle, avatar, children }) {

    const renderCardTitle = title ? (
        <div className="card-header">
            <img className="avatar" src={avatar}/>
            <div className="title">{ title }</div>
        </div>
    ): null;

    return(
        <div className="card">
            { renderCardTitle }
            <div className="card-body">
                { children }
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    renderTitle: PropTypes.func,
};

Card.defaultProps = {
    title: '',
    renderTitle: () => null
};

export default Card;
