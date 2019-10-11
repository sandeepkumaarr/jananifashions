//redux log library, miidleware just logs the action and moves along.useful for debugging
import {createStore, applyMiddleware} from 'redux';
import {persistStore} from  'redux-persist';
import {logger} from 'redux-logger';

import rootReducer from './root-reducer';


const middleWares  =  [];

if(process.env.NODE_ENV === 'development'){
    middleWares.push(logger);
}

export const store =  createStore(rootReducer,applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default {store, persistor};