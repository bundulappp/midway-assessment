import { AppError } from './app.error';
import { Recipe, RecipeType } from './recipe';
import { Store } from './stores/store.type';

export async function list(store: Store<RecipeType[]>, args: string[]) {
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  const formatted = recipes
    .map((recipe) => `- [${recipe.id}] ${recipe.name}`)
    .join('\n');
  console.log('Your recipes:');
  console.log(formatted);
}

export async function details(store: Store<RecipeType[]>, args: string[]) {
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  const id = parseInt(args[0]);
  const matchingRecipe = recipes.find((item) => item.id === id);

  if (!matchingRecipe) {
    throw new AppError(`Recipe with the following id: ${id} is not found`);
  }

  console.log(`Name: ${matchingRecipe.name}`);
}
