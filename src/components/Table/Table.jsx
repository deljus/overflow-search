import React, {useState} from 'react';
import { get, isEmpty, map, has, findIndex, keys, uniqueId } from 'lodash';
import PropTypes from 'prop-types';

import './table.css';

const ascCompare = (path) => (a1, b1) => {
    const a = get(a1, path);
    const b = get(b1, path);

    if (a > b) {
        return 1; }
    if (a < b) {
        return -1; }
    return 0;
};

const descCompare = (path) => (a1, b1) => {
    const a = get(a1, path);
    const b = get(b1, path);

    if (a < b) {
        return 1; }
    if (a > b) {
        return -1; }
    return 0;
};

const SORT = [{
    type: 'NONE', icon: 'fa fa-sort', fn: null
},{
    type: 'DESC', icon: 'fa fa-sort-amount-down', fn: descCompare
}, {
    type: 'ASC', icon: 'fa fa-sort-amount-up', fn: ascCompare
}];

/**
 * Component Table
 * @param dataSource - Table data
 * @param columns - Column table
 * @returns {*}
 * @constructor
 */
function Table({ dataSource, columns }) {

    const [sorting, setSorting] = useState({});

    const handleSortClick = (dataIndex) => () => {
        if(!has(sorting, [dataIndex])){
            setSorting({ [dataIndex]: SORT[1] });
            return;
        }
        const item = get(sorting, [dataIndex]);

        let index = findIndex(SORT, item);
        if(index < SORT.length){
            setSorting({ [dataIndex]: SORT[++index] });
        }else {
            setSorting({ [dataIndex]: SORT[0] });
        }

    };

    const constRenaderSortIcon = (dataIndex) => (
        <i key={uniqueId('table_sort_')}
           className={get(sorting, [dataIndex, 'icon'], 'fa fa-sort')}
           aria-hidden="true"
           onClick={handleSortClick(dataIndex)}
        />
    );

    const renderHeader = ({ title, sortable, dataIndex }) => (
        <th key={uniqueId('table_th_')}>
            { title }{ sortable && constRenaderSortIcon(dataIndex) }
        </th>
    );

    const renderTdBody = (dataSourceItem) => ({ dataIndex, render }) => (
            <td key={uniqueId('table_td_')}>
                { (render && render(get(dataSourceItem,dataIndex), dataSourceItem)) || get(dataSourceItem, dataIndex) }
            </td>
        );

    const renderBody = ({ ...rest }) => (
        <tr key={uniqueId('table_tr_')} >
            { map(columns, renderTdBody(rest)) }
        </tr>
    );

    const sortKey = keys(sorting)[0];
    const newDataSource = !isEmpty(sorting) && has(sorting, [sortKey, 'fn'])
        ? dataSource.sort(sorting[sortKey].fn(sortKey))
        : dataSource;

    return(
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        { map(columns, renderHeader) }
                    </tr>
                    { map(newDataSource, renderBody) }
                </tbody>
            </table>
            { isEmpty(dataSource) && (<div className="table-empty">Data is Empty</div>) }
        </div>
    )
}

Table.propTypes = {
    dataSource: PropTypes.array,
    columns: PropTypes.array
};

Table.defaultProps = {
    dataSource: [],
    columns: []
};

export default Table;
