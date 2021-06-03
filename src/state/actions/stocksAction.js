import {
  FETCH_STOCKS_SUCCEEDED,
  FETCH_STOCKS_FAILED,
  SET_STOCKS
} from './types';

export const loadStocksSuccess = message => ({
  type: FETCH_STOCKS_SUCCEEDED,
  payload: message
});

export const loadStocksFailure = error => ({
  type: FETCH_STOCKS_FAILED,
  payload: error
});

export const setStocks = data => ({
  type: SET_STOCKS,
  payload: data
});
