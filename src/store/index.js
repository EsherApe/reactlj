import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const devTools = composeWithDevTools;
const enhancer = applyMiddleware(thunk, randomId, api);
const store = createStore(reducer, {}, devTools(enhancer));

//dev only
window.store = store;

export default store;