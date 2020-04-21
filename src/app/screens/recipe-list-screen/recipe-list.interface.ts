import {Dispatch} from 'redux';

export interface RecipeListPropsInterface {
    modal: boolean;
    dispatch: Dispatch;
    navigation: any;
    //later
    recipeList: any;
}

export interface RecipeListReduxStateInterface {
    modal: {
        isModalVisible: boolean;
    };
    recipe: {
        //later
    }
}
