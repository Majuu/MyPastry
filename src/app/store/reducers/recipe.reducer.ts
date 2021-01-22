import { recipeActions } from '../actions/recipe.actions';
// ToDo remove hard-coded recipe list
import { allRecipeList } from '../../consts/all-recipes-list.const';
import { RecipeListItemInterface } from '../../interfaces/recipe.interface';
import extractOpacity from 'react-native-svg/lib/typescript/lib/extract/extractOpacity';

interface InitialStateInterface {
  allRecipes: RecipeListItemInterface[];
  favouriteRecipes: RecipeListItemInterface[];
}

const initialState: InitialStateInterface = {
  allRecipes: [],
  favouriteRecipes: []
};

// ToDo action typing
const recipeReducer = (state: InitialStateInterface = initialState, action: any) => {
  switch (action.type) {
    case recipeActions.SET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.payload
      };
    case recipeActions.SET_FAVOURITE_RECIPES:
      return {
        ...state,
        favouriteRecipes: action.payload
      };
    case recipeActions.GET_ALL_RECIPES:
    case recipeActions.GET_USER_RECIPES:
    default:
      return { ...state };
  }
};

export default { recipeReducer, initialState };
