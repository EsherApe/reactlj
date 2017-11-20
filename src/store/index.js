import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';

const enhancer = applyMiddleware(randomId, api);
const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;