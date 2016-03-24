import 'babel-polyfill';
import update from 'react-addons-update';
import actionTypes from '../constants/actionTypes';

const tweets = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {

        case actionTypes.INVALIDATE_TOPIC:
            return update(state, {
                didInvalidate: {$set: true}
            });

        case actionTypes.REQUEST_TWEETS:
            return update(state, {
                isFetching: {$set: true},
                didInvalidate: {$set: false}
            });

        case actionTypes.REQUEST_TWEETS_SUCCESS:
            return update(state, {
                isFetching: {$set: false},
                items: {$set: action.items},
                receivedAt: {$set: action.receivedAt},
                didInvalidate: {$set: false}
            });
        default:
            return state
    }
};

const tweetsReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_TWEETS:
        case actionTypes.REQUEST_TWEETS_SUCCESS:
            return update(state, {
                [action.topic]: {$set: tweets(state[action.topic], action)}
            });
        default:
            return state;
    }
};

export default tweetsReducer;