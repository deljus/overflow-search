import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, map, eq } from 'lodash';
import PropTypes from 'prop-types';

import { Table, Sider, Loader, Badge } from 'components';
import { getData } from 'core/actions';
import { api } from 'config';
import { getParamsToObj, prepareGetUrl } from 'helpers';

const SIDER_TYPE = {
    TAGS: 'TAGS',
    AUTHORS: 'AUTHORS'
};

class ResultPage extends Component{
    state = {
        open: false,
        type: null
    };

    componentDidMount = () => {
        const { initPage, location } = this.props;
        const { search } = getParamsToObj(location.search);
        initPage(prepareGetUrl(api.search, { title: search, site: 'stackoverflow' }));

    };

    handlerBadgeClick = (tagged) => () => {
        const { getTags } = this.props;
        getTags(prepareGetUrl(api.search, { tagged, site: 'stackoverflow' }));
        this.setState({ open: true, type: SIDER_TYPE.TAGS });
    };

    handleCloseSide = () => {
        this.setState({ open: false, type: null });
    };

    handleLinkClick = ({ owner }) => (e) => {
        e.preventDefault();
        const { getAuthors } = this.props;
        getAuthors(prepareGetUrl(api.search, { user: owner.user_id, site: 'stackoverflow' }));
        this.setState({ open: true, type: SIDER_TYPE.AUTHORS });
    };

    renderTags = (value, key) => (
        <Badge text={value} color="primary" onClick={this.handlerBadgeClick(value)} />
    );

    renderAuthorName = (value, obj) => (
        <a href="#" onClick={this.handleLinkClick(obj)}>{ value }</a>
    );

    render(){
        const { name, dataSource, searchListStatus, tagListDataSource, tagListStatus, authorListDataSource } = this.props;
        const { open, type } = this.state;

        const columns = [
            {
                title: 'Author',
                dataIndex: 'owner.display_name',
                render: this.renderAuthorName
            },
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'age',
            },
            {
                title: 'Answers',
                dataIndex: 'answer_count'
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
                    <Table dataSource={dataSource} columns={columns} />
                </Loader>
                <Sider
                    onClose={this.handleCloseSide}
                    open={open}
                    render={() => (<Loader loading={tagListStatus.loading}><Table dataSource={eq(type, SIDER_TYPE.TAGS) ? tagListDataSource: authorListDataSource } columns={columns} /></Loader>)}
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
    tagListStatus: get(state, 'fetch.tags', {}),
    tagListDataSource: get(state, 'data.tags.items', []),
    authorListStatus: get(state, 'fetch.tags', {}),
    authorListDataSource: get(state, 'data.tags.items', []),
});

const mapDispatchToProps = dispatch => ({
    initPage: (url) => dispatch(getData('searchList', url)),
    getTags: (url) => dispatch(getData('tags', url)),
    getAuthors: (url) => dispatch(getData('authors', url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
