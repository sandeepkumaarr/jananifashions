//redux log library, miidleware just logs the action and moves along.useful for debugging
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';

import rootReducer from './root-reducer';


const middleWares  =  [logger];

const store =  createStore(rootReducer,applyMiddleware(...middleWares));


export default store;