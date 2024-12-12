import { Todo } from '@/types';

export const getCountOfNotCompletedTodos = (todos: Todo[]) => {
  let count = 0;
  todos.forEach((todo) => (!todo.completed ? count++ : undefined));
  return count;
};
