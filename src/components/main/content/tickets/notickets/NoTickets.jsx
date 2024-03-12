import React from 'react';
import styles from './notickets.module.scss';

export default function NoTickets() {
  return (
    <div className={styles.container}>
      <div>
        Рейсов, подходящих под заданные фильтры, не найдено
      </div>
    </div>
  );
}
