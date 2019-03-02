import {createStore, applyMiddleware} from 'redux'
import myaccountApp from './../reducers/index';
import thunk from 'redux-thunk'
import logger from 'redux-logger';


export const store = createStore(myaccountApp, applyMiddleware(thunk, logger));
