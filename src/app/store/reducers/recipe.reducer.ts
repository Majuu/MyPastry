import {recipeActions} from '../actions/recipe.actions';
import {allRecipeList} from '../../consts/all-recipes-list.const';

const initialState = {
    allRecipes: allRecipeList
};

const recipeReducer = (state = initialState, action) => {
    switch (action) {
        case recipeActions.GET_ALL_RECIPES:
        case recipeActions.GET_USER_RECIPES:
        default:
            return {...state};
    }
};

export default {recipeReducer, initialState};
