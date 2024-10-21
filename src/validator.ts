import { AppError } from './app.error';

export function validateArgs(args: string[]) {
  if (args.includes('list') && args.length > 3) {
    throw new AppError('The list command should not have any argument.');
  }

  if (args.includes('details') && args.length === 3) {
    throw new AppError('Recipe id is mandantory');
  }

  if (args.includes('details') && args.length > 4) {
    throw new AppError('Deatails command only need the id of the recipe');
  }

  if (args.includes('details') && isNaN(parseInt(args[3]))) {
    throw new AppError('Id should be numeric value');
  }
}
