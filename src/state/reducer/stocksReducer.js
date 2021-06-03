import * as ACTIONS from '../actions/types';

const initialState = {
  loading: true,
  data: [],
  message: ''
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_STOCKS_SUCCEEDED:
      return { ...state, message: action.payload };
    case ACTIONS.FETCH_STOCKS_FAILED:
      return { ...state, message: action.payload };
    case ACTIONS.SET_STOCKS:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default stocksReducer;
