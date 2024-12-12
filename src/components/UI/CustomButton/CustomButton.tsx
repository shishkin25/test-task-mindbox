import { useRef } from 'react';
import styles from './CustomButton.module.scss';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      buttonRef.current?.classList.add(styles.active);
      setTimeout(() => {
        buttonRef.current?.classList.remove(styles.active);
      }, 100);
    }
  };

  return (
    <button
      className={styles.container}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      ref={buttonRef}
    >
      {text}
    </button>
  );
};

export default CustomButton;
