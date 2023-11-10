import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
      <p className={styles.loadingText}>Loading... this can take a while...</p>
    </div>
  );
};

export default LoadingSpinner;
