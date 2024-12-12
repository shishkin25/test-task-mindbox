import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import styles from './CustomCheckbox.module.scss';

interface CustomCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onChange();
    }
  };

  return (
    <div className={styles.container}>
      {checked ? (
        <RiCheckboxCircleLine className={styles.arrow} />
      ) : (
        <RiCheckboxBlankCircleLine className={styles.noArrow} />
      )}

      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default CustomCheckbox;
