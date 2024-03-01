/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import styles from '../../index.module.scss';
import 'normalize.css';

import style from './app.module.scss';

const App = () => (
  <div style={{ backgroundColor: '#F3F7FA' }} className={style.container}>
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  </div>
);

export default App;
