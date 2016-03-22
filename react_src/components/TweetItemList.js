import React, { Component, PropTypes } from 'react'
import actions from '../actions/actions';

class TweetItemList extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.topic !== this.props.topic) {
            const { dispatch, topic } = nextProps;
            dispatch(actions.fetchTweets(topic))
        }
    }

    render() {
        return(
            <div>
                <h3>Topic: {this.props.topic}</h3>
                <div>{JSON.stringify(this.props.items)}</div>
            </div>
        )
    }
}

export default TweetItemList;