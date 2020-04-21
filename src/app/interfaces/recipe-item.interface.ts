export interface RecipeListItemInterface {
    title: string;
    category: string;
    time: string;
    isFavourite: boolean;
    image: string; //check?
    ingredients: {
        flour: number;
        eggs: number;
        milk: number;
    };
}
