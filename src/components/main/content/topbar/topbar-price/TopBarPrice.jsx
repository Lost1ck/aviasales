import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { choosePrice } from '../../../../../store/aviasalesSlice';
import styles from './topbarprice.module.scss';

const TopBarPrice = () => {
  const dispatch = useDispatch();
  const activeButton = useSelector((state) => state.aviasales.activeButton);

  const handleChoosePrice = (buttonName) => {
    dispatch(choosePrice(buttonName));
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${activeButton === 'cheapest' ? styles.active : ''}`}
        onClick={() => handleChoosePrice('cheapest')}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={`${styles.button} ${activeButton === 'fastest' ? styles.active : ''}`}
        onClick={() => handleChoosePrice('fastest')}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={`${styles.button} ${activeButton === 'optimal' ? styles.active : ''}`}
        onClick={() => handleChoosePrice('optimal')}
      >
        Оптимальный
      </button>
    </>
  );
};

export default TopBarPrice;
