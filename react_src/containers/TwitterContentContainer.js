import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';
import TweetItemList from '../components/TweetItemList';

const mapStateToProps = (state) => {
    const { topic, tweets } = state;
    const {
        isFetching,
        items,
        receivedAt
        } = tweets[topic] || {
        isFetching: false,
        items: []
    };

    return {
        topic,
        items,
        isFetching,
        receivedAt
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        refreshTopic: (topic) =>{
            dispatch(actions.invalidateTopic(topic));
            dispatch(actions.fetchTweetsIfNeeded(topic));
        },

        loadTweetsIfNeeded: (topic) => {
            dispatch(actions.fetchTweetsIfNeeded(topic))
        }
    }
};

const TwitterContentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetItemList);

export default TwitterContentContainer;