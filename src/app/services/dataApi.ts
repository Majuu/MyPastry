import { RecipeListItemInterface } from '../interfaces/recipe.interface';

// url works only if json server is live
const url = 'http://10.0.2.2:3000';

export async function getAllRecipes(): Promise<RecipeListItemInterface> {
  const response = await fetch(`${url}/recipes`);
  if (response.status < 400) {
    return await response.json();
  } else {
    throw new Error(String(response.status));
  }
}
