import { Todo } from '@/types';
import styles from './Item.module.scss';
import CustomCheckbox from '@/components/UI/CustomCheckbox';
import { useAppDispatch } from '@/store/hooks';
import { toggleTodo } from '@/store/slices/TodosSlice';

interface ItemProps {
  todo: Todo;
}

const Item: React.FC<ItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleToggleTodo = (todo: Todo) => {
    dispatch(toggleTodo(todo));
  };

  const classes = todo.completed
    ? `${styles.container} ${styles.completed}`
    : styles.container;

  return (
    <div className={classes}>
      <div className={styles.checkboxWrapper}>
        <CustomCheckbox
          checked={todo.completed}
          onChange={() => handleToggleTodo(todo)}
        />
      </div>
      <div className={styles.text}>{todo.text}</div>
    </div>
  );
};

export default Item;
