// Aside.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../button/Button';
import { toggleCheckbox, toggleAllCheckboxes, setAllCheckboxes } from '../../../store/actions';

import styles from './aside.module.scss';

export default function Aside() {
  const dispatch = useDispatch();
  const { allChecked, checkboxes } = useSelector((state) => state.aviasales);

  const handleAllTasks = () => {
    if (allChecked) {
      dispatch(toggleAllCheckboxes());
    } else {
      dispatch(setAllCheckboxes());
    }
  };

  const handleCheckboxChange = (checkboxName) => {
    dispatch(toggleCheckbox({ checkboxName }));
  };

  return (
    <aside className={styles.block}>
      <div className={styles.title}>
        <h3>количество пересадок</h3>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.button} onClick={() => handleAllTasks()} isChecked={allChecked}>
          Все
        </Button>
        <Button className={styles.button} onClick={() => handleCheckboxChange('withoutTransfer')} isChecked={checkboxes.withoutTransfer}>
          без пересадки
        </Button>
        <Button className={styles.button} onClick={() => handleCheckboxChange('oneTransfer')} isChecked={checkboxes.oneTransfer}>
          1 пересадка
        </Button>
        <Button className={styles.button} onClick={() => handleCheckboxChange('twoTransfers')} isChecked={checkboxes.twoTransfers}>
          2 пересадки
        </Button>
        <Button className={styles.button} onClick={() => handleCheckboxChange('threeTransfers')} isChecked={checkboxes.threeTransfers}>
          3 пересадки
        </Button>
      </div>
    </aside>
  );
}
