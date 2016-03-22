import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TweetItemList from '../components/TweetItemList';

const mapStateToProps = (state) => {
    const { topic, tweets } = state;
    const {
        isFetching,
        items
        } = tweets[topic] || {
        isFetching: true,
        items: []
    };

    return {
        topic,
        items,
        isFetching
    }
};

const TwitterContentContainer = connect(mapStateToProps)(TweetItemList);

export default TwitterContentContainer;