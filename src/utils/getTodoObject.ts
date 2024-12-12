import { v4 as uuidv4 } from 'uuid';
import { Todo } from '@/types';

export const getTodoObject = (text: string): Todo => {
  return {
    id: uuidv4(),
    completed: false,
    text,
  };
};
