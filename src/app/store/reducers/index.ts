import {combineReducers} from 'redux';
import modal from './modal.reducer';
import recipe from './recipe.reducer';

const appReducer = combineReducers({
    modal: modal.modalReducer,
    recipe: recipe.recipeReducer
});

export default (state, action): any => appReducer(state, action);
