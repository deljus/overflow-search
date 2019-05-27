import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { SearchInput } from 'components'
import { routes } from 'config';
import { prepareUrl } from 'helpers';

class IndexPage extends Component{

    handleSearch = (search) => {
        const { history } = this.props;
        history.push(prepareUrl(routes.results.path, null, { search }));
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
                    placeholder="Your query..."
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

export default withRouter(IndexPage);
