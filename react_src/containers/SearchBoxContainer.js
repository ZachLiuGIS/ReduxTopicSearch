import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import actions from '../actions/actions';
import SearchBox from '../components/SearchBox';

const mapStateToProps = (state) => {
    return {
        topic: state.topic
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBtnClick: (topic) => {
            dispatch(actions.selectTopic(topic));
        }
    }
};

const SearchBoxContainer = connect(
    mapStateToProps,
    mapDispatchToProps)
(SearchBox);

export default SearchBoxContainer;
