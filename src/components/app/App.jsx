/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/Header';
import Main from '../main/Main';
import styles from '../../index.module.scss';
import 'normalize.css';

import style from './app.module.scss';

const App = () => {
  const isOnline = useSelector((state) => state.network.isOnline);
  return (
    <div>
      {isOnline
        ? (
          <div style={{ backgroundColor: '#F3F7FA' }} className={style.container}>
            <div className={styles.container}>
              <Header />
              <Main />
            </div>
          </div>
        )
        : <div>No Connection</div>}
    </div>
  );
};

export default App;
