import { useState } from 'react';
import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import styles from './MainContent.module.scss';
import { useAppDispatch } from '@/store/hooks';
import { addTodo } from '@/store/slices/TodosSlice';
import { getTodoObject } from '@/utils/getTodoObject';
import Todos from '@/components/Todos';

const MainContent = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useAppDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim().length) {
      const newTodo = getTodoObject(inputValue);
      dispatch(addTodo(newTodo));

      setInputValue('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>todos</div>
      <div className={styles.addTaskWrapper}>
        <div className={styles.inputWrapper}>
          <CustomInput
            placeholderText="What needs to be done?"
            value={inputValue}
            onChange={handleChangeInput}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <CustomButton text="Add" onClick={handleAddTodo} />
        </div>
      </div>
      <Todos />
    </div>
  );
};

export default MainContent;
