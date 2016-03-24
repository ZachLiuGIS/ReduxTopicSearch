import React, { Component, PropTypes } from 'react'
import actions from '../actions/actions';
import TweetItem from './TweetItem';

class TweetItemList extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.topic !== this.props.topic) {
            this.props.loadTweetsIfNeeded(nextProps.topic);
        }
    }

    onClick() {
        let topic = this.props.topic;
        this.props.refreshTopic(topic);
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
                <h3>Topic: {this.props.topic} <a className="btn btn-default btn-small" onClick={this.onClick.bind(this)}>Refresh</a></h3>
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