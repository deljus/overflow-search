import React, { Component } from 'react';
import { get, map, isEmpty } from "lodash";
import { connect } from "react-redux";

import { getData } from 'core/actions';
import { api } from 'config';
import { prepareUrl } from 'helpers';
import { Card, Html, Loader } from 'components';


class InfoPage extends Component{
    componentDidMount = () => {
        const { getAnswers, getQuestions, match } = this.props;
        getAnswers(prepareUrl(api.answers, match.params, { filter: 'withbody', site: 'stackoverflow' }));
        getQuestions(prepareUrl(api.questions, match.params, { filter: 'withbody', site: 'stackoverflow' }));
    };

    renderCards = ({ owner, body }) => (
        <Card avatar={owner.profile_image} title={owner.display_name}>
           <Html>
                {body}
           </Html>
        </Card>
    );

    render(){
        const { answersDataSource, questionsDataSource, loading } = this.props;

        return(
            <Loader loading={loading}>
                <h2>Question:</h2>
                { map(questionsDataSource, this.renderCards) }
                <h2>{ !isEmpty(answersDataSource) ? 'Answers of question:' : 'No answers'}</h2>
                { map(answersDataSource, this.renderCards) }
            </Loader>
        )
    }
}

const mapStateToProps = state => ({
    answersDataSource: get(state, 'data.answers.items', []),
    questionsDataSource: get(state, 'data.questions.items', []),
    loading: get(state, 'fetch.questions.loading') || get(state, 'fetch.answers.loading')
});

const mapDispatchToProps = dispatch => ({
    getAnswers: (url) => dispatch(getData('answers', url)),
    getQuestions: (url) => dispatch(getData('questions', url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
