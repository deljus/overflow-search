import React, { useState } from 'react';
import { map, findLast } from 'lodash';

const withValidation = (WrappedComponent) => ({ validators, ...rest }) => {

    const [error, setError] = useState(null);

    const handleChange = (value) => {
        if(!validators) return;
        const validateErrors = map(validators, ({ error, fn }) => ({ error, validate: fn(value) }));
        const errorObj = findLast(validateErrors, ['validate', false]);
        errorObj ? setError(errorObj.error) : setError('');
    };

    return <WrappedComponent { ...rest } onChange={handleChange} error={error} />
};


export default withValidation;
