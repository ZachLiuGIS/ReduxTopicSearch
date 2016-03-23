import React, { Component, PropTypes } from 'react'

class TweetItem extends Component {
    render() {
        return (
            <div className="row list-group-item tweet-list-item">
                <div className="col-xs-1">
                    <img width="42" height="42" src={this.props.profileUrl}/>
                </div>
                <div className="col-xs-11">
                    <h5 className="twitter-user-section">
                        {this.props.username } <small>@{this.props.screenname }</small>
                        <span className="pull-right"><small><em>Created At:</em> {this.props.createdAt}</small></span>
                    </h5>
                    <div dangerouslySetInnerHTML={{__html: this.props.text}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default TweetItem;