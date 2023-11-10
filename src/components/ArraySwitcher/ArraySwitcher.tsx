import React from 'react';
import styles from './ArraySwitcher.module.css';
import { ArraySwitcherProps } from '../../utils/interfaces';

const ShuffleButton: React.FC<ArraySwitcherProps> = ({ handleArraySwitcherClick, switcherText }) => {
  return (
    <div className={styles.arraySwitcherContainer}>
      <span className={styles.arraySwitcher} onClick={handleArraySwitcherClick}> {switcherText} </span>
    </div>
  );
};

export default ShuffleButton;
