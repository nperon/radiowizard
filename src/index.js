import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './style/style.css';
import reducers from './reducers';
import App from './App';
import { searchMiddleware } from './middlewares/searchMiddleware';

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
