import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import './table.css';

import { map } from 'lodash';

function Table({ dataSource, columns }) {

    const renderHeader = ({ title, sortable }) => (
        <th>{ title } { sortable && <i /> }</th>
    );

    const renderTdBody = (dataSourceItem) => ({ dataIndex, render }) => (
            <td>{ (render && render(get(dataSourceItem,dataIndex), dataSourceItem)) || get(dataSourceItem, dataIndex) }</td>
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
