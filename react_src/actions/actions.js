import actions from '../actions/actions';
import actionTypes from '../constants/actionTypes';
import constants from '../constants/constants';
import { buildQueryParams } from '../utils/utils';

export default {
    selectTopic(topic) {
        return {
            type: actionTypes.SELECT_TOPIC,
            topic
        };
    },

    requestTweets(topic) {
        return {
            type: actionTypes.REQUEST_TWEETS,
            topic
        };
    },

    requestTweetsSuccess(topic, response) {
        return {
            type: actionTypes.REQUEST_TWEETS_SUCCESS,
            topic,
            items: response.map(item => {
                return {
                    username: item.user.name,
                    screenname: item.user.screen_name,
                    profileUrl: item.user.profile_image_url,
                    createdAt: item.created_at,
                    text: item.text
                }
            })
        };
    },

    requestTweetsError(topic, error) {
        return {
            type: actionTypes.REQUEST_TWEETS_ERROR,
            topic,
            error
        };
    },

    fetchTweets(topic) {
        let params = buildQueryParams({q: topic, count: 5});
        return dispatch => {
            dispatch(this.requestTweets(topic));
            return fetch(constants.TWITTER_SEARCH_URL + '?' + params)
                .then(response => response.json())
                .then(json => dispatch(this.requestTweetsSuccess(topic, json)));
        };
    }
};