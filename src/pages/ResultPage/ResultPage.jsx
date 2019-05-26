import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, map, flowRight } from 'lodash';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { Table, Sider, Loader, Badge } from 'components';
import { getData } from 'core/actions';
import { api } from 'config';
import { getParamsToObj, prepareUrl } from 'helpers';
import {routes} from "../../config";

class ResultPage extends Component{
    state = {
        open: false,
        type: null
    };

    componentDidMount = () => {
        const { initPage, location } = this.props;
        const { search } = getParamsToObj(location.search);
        initPage(prepareUrl(api.search, null, { title: search, site: 'stackoverflow' }));

    };

    // Main table
    handlerBadgeClick = (tagged) => () => {
        const { getSiderData } = this.props;
        getSiderData(prepareUrl(api.search, null, { tagged, site: 'stackoverflow' }));
        this.setState({ open: true });
    };

    handleCloseSide = () => {
        this.setState({ open: false, type: null });
    };

    handleLinkClick = ({ owner }) => (e) => {
        e.preventDefault();
        const { getSiderData } = this.props;
        getSiderData(prepareUrl(api.search, null, { user: owner.user_id, site: 'stackoverflow' }));
        this.setState({ open: true });
    };

    renderTags = (value) => (
        <Badge text={value} color="primary" onClick={this.handlerBadgeClick(value)} clickable/>
    );

    renderAuthorName = (value, obj) => (
        <a href="#" onClick={this.handleLinkClick(obj)}>{ value }</a>
    );

    renderTagsForSiderTable = (value) => (
        <Badge text={value} color="primary" />
    );

    renderLinkToInfo = (value, obj) => (
        <Link to={prepareUrl(routes.info.path, obj)}>{ value }</Link>
    );

    renderSider = () => {
        const columns = [
            {
                title: 'Author',
                dataIndex: 'owner.display_name',
                sortable: true
            },
            {
                title: 'Title',
                dataIndex: 'title',
                render: this.renderLinkToInfo,
                sortable: true
            },
            {
                title: 'Answers',
                dataIndex: 'answer_count',
                render: this.renderLinkToInfo,
                sortable: true
            },
            {
                title: 'Tags',
                dataIndex: 'tags',
                render: (values) => map(values, this.renderTagsForSiderTable)
            },
        ];

        const { siderContentStatus, siderDataSource } = this.props;

        return(
        <Loader loading={siderContentStatus.loading}>
            <Table dataSource={siderDataSource} columns={columns} />
        </Loader>
        )
    };

    render(){
        const { name, dataSource, searchListStatus } = this.props;
        const { open } = this.state;

        const columns = [
            {
                title: 'Author',
                dataIndex: 'owner.display_name',
                render: this.renderAuthorName,
                sortable: true
            },
            {
                title: 'Title',
                dataIndex: 'title',
                render: this.renderLinkToInfo,
                sortable: true
            },
            {
                title: 'Answers',
                dataIndex: 'answer_count',
                render: this.renderLinkToInfo,
                sortable: true,
            },
            {
                title: 'Tags',
                dataIndex: 'tags',
                render: (values) => map(values, this.renderTags)
            },
        ];

        return(
            <>
                <h2>{ name }</h2>
                <Loader loading={searchListStatus.loading}>
                    <Table
                        dataSource={dataSource}
                        columns={columns} />
                </Loader>
                <Sider
                    onClose={this.handleCloseSide}
                    open={open}
                    render={this.renderSider}
                />
            </>
        )
    }
}

ResultPage.propTypes = {

};

ResultPage.defaultProps = {

};

const mapStateToProps = state => ({
    dataSource: get(state, 'data.searchList.items', []),
    searchListStatus: get(state, 'fetch.searchList', {}),
    siderContentStatus: get(state, 'fetch.sider', {}),
    siderDataSource: get(state, 'data.sider.items', []),
});

const mapDispatchToProps = dispatch => ({
    initPage: (url) => dispatch(getData('searchList', url)),
    getSiderData: (url) => dispatch(getData('sider', url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
