import 'babel-polyfill';
import update from 'react-addons-update';
import actionTypes from '../constants/actionTypes';

const tweets = (state={}, action) => {

};

const tweetsReducer = (state={}, action) => {
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