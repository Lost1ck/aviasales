import React from 'react';
import Aside from './aside/Aside';
import Content from './content/Content';

import styles from './main.module.scss';

export default function Main() {
  return (
    <main className={styles.container}>
      <Aside />
      <Content />
    </main>
  );
}
