import { Todo } from '@/types';
import { ShowTodosState } from '@/types';

export const getSortedTodosByState = (todos: Todo[], state: ShowTodosState) => {
  if (state === 'All') {
    return [...todos];
  }

  if (state === 'Active') {
    return todos.filter((todo) => !todo.completed);
  }

  return todos.filter((todo) => todo.completed);
};
