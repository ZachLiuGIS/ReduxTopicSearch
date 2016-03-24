import 'babel-polyfill';
import update from 'react-addons-update';
import actionTypes from '../constants/actionTypes';

const tweets = (state = {
    isFetching: false,
    items: [],
    valid: true
}, action) => {
    switch (action.type) {

        case actionTypes.INVALIDATE_TOPIC:
            return update(state, {
                valid: {$set: false}
            });

        case actionTypes.REQUEST_TWEETS:
            return update(state, {
                isFetching: {$set: true},
                valid: {$set: true}
            });

        case actionTypes.REQUEST_TWEETS_SUCCESS:
            return update(state, {
                valid: {$set: true},
                isFetching: {$set: false},
                items: {$set: action.items},
                receivedAt: {$set: action.receivedAt}

            });
        default:
            return state
    }
};

const tweetsReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.INVALIDATE_TOPIC:
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