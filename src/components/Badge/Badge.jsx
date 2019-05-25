import React from 'react';

import './badge.css';

function Badge({ text, color, ...rest }) {
    return(
        <span className={`badge ${color}`} { ...rest }>
            {text}
        </span>
    );
}

export default Badge;
