import React from 'react';
import styles from './ShuffleButton.module.css';
import { ShuffleButtonProps } from '../../utils/interfaces';

const ShuffleButton: React.FC<ShuffleButtonProps> = ({ handleShuffleClick }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={handleShuffleClick}>Shuffle</button>
    </div>
  );
};

export default ShuffleButton;
