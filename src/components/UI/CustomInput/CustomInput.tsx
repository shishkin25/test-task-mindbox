import { IoIosArrowDown } from 'react-icons/io';
import { useRef } from 'react';
import styles from './CustomInput.module.scss';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderText: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholderText,
  value,
  onChange,
  onKeyDown,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCustomInputClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.container} onClick={handleCustomInputClick}>
      <IoIosArrowDown className={styles.logoSize} />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...props}
        ref={inputRef}
      />
    </div>
  );
};

export default CustomInput;
