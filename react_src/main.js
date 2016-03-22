import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import App from './components/App';

const production = process.env.NODE_ENV === 'production';

// Create store with middleware
const middleware =  production ?
    [ thunk ] :
    [ thunk, logger() ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

//import actions from './actions/actions';
//store.dispatch(actions.fetchTweets('Linsanity'));

// This is required for hot module replacement!
//if (production) {
//    if (module.hot) {
//        module.hot.accept();
//    }
//}

// get root element
const root = document.getElementById('root');

const AppContainer = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<AppContainer/>, root);