import React, { Component, PropTypes } from 'react'
import actions from '../actions/actions';
import TweetItem from './TweetItem';

class TweetItemList extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.topic !== this.props.topic) {
            const { dispatch, topic } = nextProps;
            dispatch(actions.fetchTweetsIfNeeded(topic))
        }
    }

    render() {
        const isEmpty = this.props.items.length === 0;

        let tweetList = this.props.items.map((item, index)=> {
            return <TweetItem key={index} {...item} />
        });

        if (isEmpty) {
            if (this.props.isFetching) {
                return <div>...Loading</div>
            } else {
                return <div></div>
            }
        }
        return(
            <div>
                <h3>Topic: {this.props.topic}</h3>
                {this.props.receivedAt ?
                    <p>Last updated at {new Date(this.props.receivedAt).toLocaleTimeString()}.</p>
                    : ''
                }

                <div className="list-group">{tweetList}</div>
            </div>
        )
    }
}

export default TweetItemList;