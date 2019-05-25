import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './table.css';

import { map } from 'lodash';

function Table({ dataSource, columns }) {

    const renderHeader = ({ title, sortable }) => (
        <th>{ title } { sortable && <i /> }</th>
    );

    const renderTdBody = (dataSourceItem) => ({ key, render }) => (
        <td>{ (render && render(dataSourceItem[key])) || dataSourceItem[key] }</td>
    );

    const renderBody = ({ ...rest }) => (
        <tr>
            { map(columns, renderTdBody(rest)) }
        </tr>
    );

    return(
        <table className="table">
            <tbody>
                <tr>
                    { map(columns, renderHeader) }
                </tr>
                { map(dataSource, renderBody) }
            </tbody>
        </table>
    )
}

export default Table;
