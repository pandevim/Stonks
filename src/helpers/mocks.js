import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as data from './mockData.json';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onGet('/stocks').reply(200, data.default);
