import React, { Component, PropTypes } from 'react'

class SearchHistory extends Component {

    render() {
        let historyList = this.props.history.map((term, index) => {
            const onLinkClick = () => {
                this.props.onLinkClick(term);
            };
            return <li key={index}><a href="#" onClick={onLinkClick}>{term}</a></li>
        });

        return (
            <ul>
                {historyList}
            </ul>
        )
    }
}

export default SearchHistory;