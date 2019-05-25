import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, Sider, Loader } from 'components';


const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street'
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (val) => (<a href="#">{ val }</a>)
    },
];

class ResultPage extends Component{

    componentDidMount = () => {

    };

    render(){
        const { name } = this.props;
        return(
            <>
                <h2>{ name }</h2>
                <Table dataSource={dataSource} columns={columns} />
                <Sider open={false} render={() => <Table dataSource={dataSource} columns={columns} />}/>
            </>
        )
    }
}

ResultPage.propTypes = {

};

ResultPage.defaultProps = {

};

export default ResultPage;
