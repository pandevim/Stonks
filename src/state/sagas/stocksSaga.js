import { call, put, takeEvery } from 'redux-saga/effects';
import API from '../../api';
import { setStocks, loadStocksFailure } from '../actions/stocksAction';

function* fetchStocks(action) {
  try {
    const data = yield call(API.fetchStocks);
    yield put(setStocks(data));
  } catch (e) {
    yield put(loadStocksFailure(e.message));
  }
}

function* stocksSaga() {
  yield takeEvery('FETCH_STOCKS_SUCCEEDED', fetchStocks);
}

export default stocksSaga;
