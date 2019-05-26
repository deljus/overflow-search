import React from 'react';
import PropTypes from 'prop-types';
import { map, get, isEmpty, compact } from 'lodash';
import { connect } from 'react-redux';

import { fetchClean } from 'core/actions';
import { Message } from 'components';


function FetchError({ fetch, onClean }) {

    const errors = map(fetch, (value, key) => {
        if(!isEmpty(value.error)){
            return ({id: key, text: get(value, 'error.error_message')})
        }
    });

    const renderMessages = (props) => (
        <Message {...props} onClose={onClean} color="danger"/>
    );

    return map(compact(errors), renderMessages);
}

const mapStateToProps = state => ({
    fetch: get(state, 'fetch', {})
});

const mapDispatchToProps = dispatch => ({
    onClean: (id) => dispatch(fetchClean(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchError);
