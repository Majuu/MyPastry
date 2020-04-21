import {RecipeListItemInterface} from '../../../interfaces/recipe-item.interface';

export interface RecipeListItemPropsInterface {
    onPress: () => {};
    item: {
        item: RecipeListItemInterface;
    };
}
