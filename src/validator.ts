import { AppError } from './app.error';

export function validateArgs(args: string[]) {
  if (args.includes('list') && args.length > 3) {
    throw new AppError('The list command should not have any argument.');
  }
}
