import {DispatchProp} from 'react-redux';

export interface RecipeListPropsInterface {
    modal?: boolean;
    dispatch?: DispatchProp;
    navigation: any;
}

export interface RecipeListReduxStateInterface {
    modal: {
        isModalVisible: boolean;
    };
}
