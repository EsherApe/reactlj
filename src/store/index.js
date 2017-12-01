import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';

const devTools = composeWithDevTools;
const enhancer = applyMiddleware(thunk, routerMiddleware(history), randomId, api);
const store = createStore(reducer, {}, devTools(enhancer));

//dev only
window.store = store;

export default store;