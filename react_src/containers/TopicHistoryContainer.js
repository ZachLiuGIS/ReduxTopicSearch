import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SearchHistory from '../components/SearchHistory';
import actions from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        history: Object.keys(state.tweets)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLinkClick: (term) => {
            dispatch(actions.selectTopic(term));
        }
    }
};

const TopicHistoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchHistory);

export default TopicHistoryContainer;