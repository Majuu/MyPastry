import {Dispatch} from 'redux';

export interface RecipeListPropsInterface {
    modal: boolean;
    dispatch: Dispatch;
    navigation: any;
    //later
    recipe: any;
}

export interface RecipeListReduxStateInterface {
    modal: {
        isModalVisible: boolean;
    };
    recipe: {
        //later
    }
}
