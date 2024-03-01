import React from 'react';
import styles from './tickets.module.scss';

// import data from '../../data';

function Tickets() {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.price}>123</div>
        <div className={styles.company}>123</div>
      </div>
      <div className={styles.main}>
        <div className={styles.there}>
          <div className={styles.way}>123</div>
          <div className={styles.time}>123</div>
          <div className={styles.transfers}>123</div>
        </div>
        <div className={styles.back}>
          <div className={styles.way}>123</div>
          <div className={styles.time}>123</div>
          <div className={styles.transfers}>123</div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
