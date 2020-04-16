import {HIDE_RECIPE_MODAL, SHOW_RECIPE_MODAL} from '../actions/modal.actions';

const initialState = {
    isModalVisible: false
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_RECIPE_MODAL:
            return {
                ...state,
                isModalVisible: true
            };
        case HIDE_RECIPE_MODAL:
            return {
                ...state,
                isModalVisible: false
            };
        default:
            return {
                ...state
            };
    }
};

export default {
    modalReducer,
    initialState
};
