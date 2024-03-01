import React from 'react';

import TopBarPrice from './topbar-price/TopBarPrice';

import styles from './TopBar.module.scss';

export default function TopBar() {
  return (
    <div className={styles.container}>
      <TopBarPrice />
    </div>
  );
}
