import {createStore} from 'redux';
// import {appReducer} from './reducers';
import combinedReducer from './reducers/index';

export const store = createStore(combinedReducer);
