import 'babel-polyfill';
import update from 'react-addons-update';
import actionTypes from '../constants/actionTypes';


const topicReducer = (state='', action) => {
    switch (action.type) {
        case actionTypes.SELECT_TOPIC:
            return action.topic;
        default:
            return state;
    }
};

export default topicReducer;