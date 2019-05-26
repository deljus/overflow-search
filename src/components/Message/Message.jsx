import React from 'react';
import PropTypes from 'prop-types';

import './message.css';

function Message({ id, text, color, onClose }) {

    const handleClose = () => {
        onClose(id);
    };

    return(
        <div className={`message ${color}`}>
            <i className="fa fa-times close" onClick={handleClose}/>
            { text }
        </div>
    )
}

Message.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
};

Message.defaultProps = {
    text: ''
};

export default Message;
