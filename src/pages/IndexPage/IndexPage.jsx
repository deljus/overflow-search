import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import { SearchInput } from 'components'
import { routes } from 'config';
import { prepareGetUrl } from 'helpers';

class IndexPage extends Component{

    handleSearch = (search) => {
        const { history } = this.props;
        history.push(prepareGetUrl(routes.results.path, { search }));
    };

    render(){
        return(
            <>
                <h2>Search to Stack Overflow site</h2>
                <p>
                    Enter questions that bother you
                </p>
                <SearchInput
                    onSearch={this.handleSearch}
                    placeholder="Query..."
                    validators={[
                        {
                            error: 'Text is empty!', fn: (value) => !!value
                        }
                     ]}
                />
            </>
        )
    }
}

IndexPage.propTypes = {
    history: PropTypes.object,
};

IndexPage.defaultProps = {
    name: '',
};

export default withRouter(IndexPage);
