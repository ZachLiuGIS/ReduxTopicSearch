import React, { Component } from 'react';
import TwitterContentContainer from '../containers/TwitterContentContainer';
import TopicsSidebar from './TopicsSidebar';
import SearchBoxContainer from '../containers/SearchBoxContainer';

class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <SearchBoxContainer/>
                        <TwitterContentContainer/>
                    </div>
                    <div className="col-md-4">
                        <TopicsSidebar/>
                    </div>
                </div>
            </div>
        )

    }
}

export default MainContent;