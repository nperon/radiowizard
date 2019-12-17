import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './style/style.css';
import reducers from './reducers';
import App from './App';
import { Types, updateFeaturedAction } from './actions/featured';

const searchMiddleware = store => next => action => {
    if ( action.type === Types.SEARCH_FOR_TEXT ) {
        const allStations = action.payload.stations;
        const stationsWithRightArtist = Object.keys(allStations).filter(
            name => allStations[name].artist && allStations[name].artist.search(action.payload.text) >=0
        );
        next(updateFeaturedAction(stationsWithRightArtist));
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
