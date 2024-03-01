/* eslint-disable arrow-body-style */
import React from 'react';
import styles from './pages.module.scss';

const Pages = () => {
  return (
    <button type="button" className={styles.pages}>
      <div className={styles.text}>показать еще 5 билетов</div>
    </button>
  );
};

export default Pages;
