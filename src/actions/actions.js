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
            response
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
        let params = buildQueryParams({q: topic});
        return dispatch => {
            dispatch(requestTweets(topic));
            return fetch(constants.TWITTER_SEARCH_URL + '?' + params)
                .then(response => response.json())
                .then(json => dispatch(actions.requestTweetsSuccess(topic, json)))
                .catch(error => dispatch(actions.requestTweetsError(topic, error)));
        };
    }
};