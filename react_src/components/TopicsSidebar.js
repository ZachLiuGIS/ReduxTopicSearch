import React, { Component, PropTypes } from 'react';
import TopicHistoryContainer from '../containers/TopicHistoryContainer';

class TopicsSidebar extends Component {
    render() {
        return (
            <div className="history-sidebar">
                <h3>Search History</h3>
                <TopicHistoryContainer/>
            </div>
        )
    }
}

export default TopicsSidebar;