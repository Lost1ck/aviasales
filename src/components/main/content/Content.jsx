import React from 'react';
import TopBar from './topbar/TopBar';
import Tickets from './tickets/Tickets';
import Pages from './pages/Pages';

import styles from './content.module.scss';

export default function Content() {
  return (
    <div className={styles.container}>
      <TopBar />
      <Tickets />
      <Pages />
    </div>
  );
}
