import {Dispatch} from 'redux';
import {RecipeListItemInterface} from '../../interfaces/recipe-item.interface';

export interface RecipeListPropsInterface {
    modal: boolean;
    dispatch: Dispatch;
    navigation: any;
    //later
    recipeList: {
        allRecipes: RecipeListItemInterface[];
    };
}

export interface RecipeListReduxStateInterface {
    modal: {
        isModalVisible: boolean;
    };
    recipe: RecipeListItemInterface;
}
