import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleActive } from '../../../../../store/actions';

import styles from './topbarprice.module.scss';

const TopBarPrice = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.tabs.active); // tab status 'cheapest'
  const handleToggle = (tab) => {
    dispatch(toggleActive(tab));
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${active === 'cheapest' ? styles.active : ''}`}
        onClick={() => handleToggle('cheapest')}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={`${styles.button} ${active === 'fastest' ? styles.active : ''}`}
        onClick={() => handleToggle('fastest')}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={`${styles.button} ${active === 'optimal' ? styles.active : ''}`}
        onClick={() => handleToggle('optimal')}
      >
        Оптимальный
      </button>
    </>
  );
};

export default TopBarPrice;
