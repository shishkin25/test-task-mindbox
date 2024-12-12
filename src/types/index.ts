export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type ShowTodosState = 'All' | 'Active' | 'Completed';
