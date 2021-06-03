import axios from 'axios';

const API = {
  fetchStocks: () =>
    axios
      .get('/stocks')
      .then(response => response.data)
      .catch(err => console.warn(err))
};

export default API;
