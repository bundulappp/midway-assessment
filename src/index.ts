import { createApp } from './app';
import { AppError } from './app.error';
import { RecipeType } from './recipe';
import { FileStore } from './stores/file.store';
import { join } from 'node:path';
import { validateArgs } from './validator';

const fileToStore = join(__dirname, '..', 'data.json');

type RecipeStore = RecipeType[];

const initialRecipes: RecipeType[] = [
  { id: 1, name: 'Scrambled Egg' },
  { id: 2, name: 'Pancake' },
];

const store = new FileStore<RecipeStore>(fileToStore, initialRecipes);
const args = process.argv;

async function main() {
  validateArgs(args);
  return await createApp(store, args);
}

main()
  .then(() => console.log('Done.'))
  .catch((error: AppError) => console.log(error.message));
