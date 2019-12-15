import { all } from 'redux-saga/effects';
import stationSagas from './stations';

export default function* rootSaga(){
	yield all([
		...stationSagas
	]);
}