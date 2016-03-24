import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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

const TwitterContentContainer = connect(mapStateToProps)(TweetItemList);

export default TwitterContentContainer;