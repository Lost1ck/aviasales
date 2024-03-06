import React from 'react';
import TopBar from './topbar/TopBar';
import Tickets from './tickets/Tickets';

import styles from './content.module.scss';

export default function Content() {
  return (
    <div className={styles.container}>
      <TopBar />
      <Tickets />
    </div>
  );
}
