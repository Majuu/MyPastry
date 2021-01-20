export interface RecipeIngredient {
  name: string;
  amount: number;
}

export interface RecipeListItemInterface {
  title: string;
  category: string;
  time: string;
  isFavourite: boolean;
  description: string;
  sumUp: string;
  authors: string;
  ingredients: RecipeIngredient[];
  // image: string; //check?
}
