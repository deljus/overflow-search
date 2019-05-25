import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

function Button({ color, text, ...rest }) {
    return(
        <button
            className={`btn ${color}`}
            { ...rest }
        >
            { text }
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    text: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    color: 'primary'
};

export default Button;
