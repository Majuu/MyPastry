export type AmountType = 'none' | 'g' | 'ml';

export interface RecipeIngredient {
  name: string;
  amount: number;
  amountType: AmountType;
}

export interface RecipeListItem {
  title: string;
  category: string;
  time: string;
  isFavourite: boolean;
  description: string;
  authors: string;
  ingredients: RecipeIngredient[];
  id?: number;
  // image: string; //check?
}
