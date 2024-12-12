import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Todo } from 'src/types';
import type { RootState } from '@/store';

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      const choosedItem = state.todos.find((item) => item.id === id);
      if (choosedItem) {
        choosedItem.completed = !choosedItem.completed;
      }
    },
    clearCompletedTodos: (state) => {
      return { ...state, todos: state.todos.filter((todo) => !todo.completed) };
    },
  },
});

export const { addTodo, toggleTodo, clearCompletedTodos } = TodosSlice.actions;
export default TodosSlice.reducer;

export const selectTodos = (state: RootState) => state.todos.todos;
