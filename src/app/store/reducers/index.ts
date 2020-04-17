import {combineReducers} from 'redux';
import modal from './modal.reducer';

const appReducer = combineReducers({
    modal: modal.modalReducer
});

export default (state, action): any => appReducer(state, action);
