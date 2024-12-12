import { useMemo, useState } from 'react';
import { PiSmileySadLight } from 'react-icons/pi';
import styles from './Todos.module.scss';
import Item from '@/components/Item';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCompletedTodos, selectTodos } from '@/store/slices/TodosSlice';
import { ShowTodosState } from '@/types';
import { getCountOfNotCompletedTodos } from '@/utils/getCountOfNotCompletedTodos';
import { getSortedTodosByState } from '@/utils/getSortedTodosByState';

const Todos = () => {
  const todos = useAppSelector(selectTodos);
  const [showTodosState, setShowTodosState] = useState<ShowTodosState>('All');

  const dispatch = useAppDispatch();

  const filteredTodos = useMemo(
    () => getSortedTodosByState(todos, showTodosState),
    [showTodosState, todos]
  );

  const countNotCompletedTodos = useMemo(
    () => getCountOfNotCompletedTodos(todos),
    [todos]
  );

  const activeClass = `${styles.footerBtn} ${styles.active}`;

  const handleShowTodosStateClick = (state: ShowTodosState) => {
    setShowTodosState(state);
  };

  const handleClearCompletedTodos = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div className={styles.container}>
      {!filteredTodos.length ? (
        <div className={styles.noTodos}>
          <div className={styles.text}>Нет тудушек</div>
          <PiSmileySadLight className={styles.emoji} />
        </div>
      ) : (
        <ul className={styles.todosWrapper}>
          {filteredTodos.map((todo) => (
            <li className={styles.item} key={todo.id}>
              <Item todo={todo} />
            </li>
          ))}
        </ul>
      )}

      {!!todos.length && (
        <>
          <div className={styles.footer}>
            <div className={styles.leftCount}>
              {countNotCompletedTodos} items left
            </div>
            <ul className={styles.itemsState}>
              <li onClick={() => handleShowTodosStateClick('All')}>
                <button
                  className={
                    showTodosState === 'All' ? activeClass : styles.footerBtn
                  }
                >
                  All
                </button>
              </li>
              <li onClick={() => handleShowTodosStateClick('Active')}>
                <button
                  className={
                    showTodosState === 'Active' ? activeClass : styles.footerBtn
                  }
                >
                  Active
                </button>
              </li>
              <li onClick={() => handleShowTodosStateClick('Completed')}>
                <button
                  className={
                    showTodosState === 'Completed'
                      ? activeClass
                      : styles.footerBtn
                  }
                >
                  Completed
                </button>
              </li>
            </ul>
            <button className={activeClass} onClick={handleClearCompletedTodos}>
              Clear completed
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todos;
