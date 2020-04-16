import {combineReducers} from 'redux';
import modal from './modal.reducer';

export const rootInitialState = {
    modal: {...modal.initialState}
};

const appReducer = combineReducers({
    modal: modal.modalReducer
});

export default (state, action): any => appReducer(state, action);

// const allReducers = combineReducers<initialState>({
//     modalReducer
// });

// export default allReducers;
// export default appReducer()
