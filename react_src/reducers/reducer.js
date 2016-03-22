import { combineReducers } from 'redux';
import topicReducer from './topicReducer';
import tweetsReducer from './tweetsReducer';

const reducer = combineReducers({
    topic: topicReducer,
    tweets: tweetsReducer
});

export default reducer;