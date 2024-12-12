import todosReducer, {
  addTodo,
  toggleTodo,
  clearCompletedTodos,
} from '@/store/slices/TodosSlice';
import { Todo } from 'src/types';

describe('TodosSlice', () => {
  const initialState = {
    todos: [
      { id: '1', text: 'Task 1', completed: false },
      { id: '2', text: 'Task 2', completed: true },
    ],
  };

  it('обработка addTodo', () => {
    const newTodo: Todo = { id: '3', text: 'New Task', completed: false };
    const action = addTodo(newTodo);
    const state = todosReducer(initialState, action);
    expect(state.todos).toContainEqual(newTodo);
  });

  it('обработка toggleTodo', () => {
    const action = toggleTodo({ id: '1', text: 'Task 1', completed: false });
    const state = todosReducer(initialState, action);
    expect(state.todos[0].completed).toBe(true);
  });

  it('обработка clearCompletedTodos', () => {
    const action = clearCompletedTodos();
    const state = todosReducer(initialState, action);
    expect(state.todos).toEqual([
      { id: '1', text: 'Task 1', completed: false },
    ]);
  });
});
