import { extractKeywords } from './extractKeywords';
import { tasks } from '../data/test';

export const parsedTasks = tasks.map(task => ({
  task,
  keywords: extractKeywords(task)
}));