import { combineReducers } from 'redux';
import StationsReducer from './stations';
import FeaturedReducer from './featured';

export default combineReducers({
	stations: StationsReducer,
	featured: FeaturedReducer
});
