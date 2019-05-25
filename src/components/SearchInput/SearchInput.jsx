import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components'
import withValidation from 'helpers/withValidation';

import './search-input.css';

function SearchInput({ onSearch, onChange, error, ...rest }) {

    const [value, setValue] = useState('');

    const handleInputChange = ({ target: { value } }) => {
        setValue(value);
        onChange(value);
    };

    const handleBtnClick = () => {
      !error && onSearch(value);
    };

    return(
        <div className="search-input">
            <div className="search-input-wrapper">
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={value}
                    { ...rest }
                />
                <Button onClick={handleBtnClick} text="Search" disabled={error || !value}/>
            </div>
            { error && <p className="text-error"> { error } </p> }
        </div>
    )
}

SearchInput.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    text: PropTypes.string,
};

SearchInput.defaultProps = {
    color: 'primary'
};

export default withValidation(SearchInput);
