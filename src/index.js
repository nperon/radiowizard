import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './style/style.css';
import reducers from './reducers';
import App from './App';
import { Types, updateFeaturedAction } from './actions/featured';

const searchMiddleware = store => next => action => {
    console.log('in middleware ', action.type);
    if ( action.type === Types.SEARCH_FOR_TEXT ) {
        next(updateFeaturedAction([0,1,2]));
        return;
    }
    next(action);
    return;
}

const store = createStore(
    reducers,
    applyMiddleware(searchMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
