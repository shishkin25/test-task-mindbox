import { ReactNode } from 'react';
import styles from './Background.module.scss';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Background;
