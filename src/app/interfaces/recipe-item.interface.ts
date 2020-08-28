export interface RecipeListItemInterface {
    title: string;
    category: string;
    time: string;
    isFavourite: boolean;
    description: string;
    sumUp: string;
    authors: string;
    image: string; //check?
    ingredients: any;
    // {
    // flour: number;
    // eggs: number;
    // milk: number;
    // };
}
