import { all } from 'redux-saga/effects';
import stocksSaga from './stocksSaga';

function* Sagas() {
  yield all([stocksSaga()]);
}

export default Sagas;
