import React, { Component, PropTypes } from 'react'
import actions from '../actions/actions';
import TweetItem from './TweetItem';

class TweetItemList extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.topic !== this.props.topic) {
            const { dispatch, topic } = nextProps;
            dispatch(actions.fetchTweets(topic))
        }
    }

    render() {
        let tweetList = this.props.items.map((item, index)=> {
            return <TweetItem key={index} {...item} />
        });
        if (this.props.isFetching) {
            return <div>...Loading</div>
        }
        return(
            <div>
                <h3>Topic: {this.props.topic}</h3>
                <div className="list-group">{tweetList}</div>
            </div>
        )
    }
}

export default TweetItemList;