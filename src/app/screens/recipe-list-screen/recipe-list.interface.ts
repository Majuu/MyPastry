import {Dispatch} from 'redux';

export interface RecipeListPropsInterface {
    modal: boolean;
    dispatch: Dispatch;
    navigation: any;
}

export interface RecipeListReduxStateInterface {
    modal: {
        isModalVisible: boolean;
    };
}
