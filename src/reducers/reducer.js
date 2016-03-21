import { combineReducers } from 'redux';
import topicReducer from './topicReducer';

const reducer = combineReducers({
    topic: topicReducer
});

export default reducer;