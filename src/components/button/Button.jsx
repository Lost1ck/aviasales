/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './button.module.scss';

const Button = ({ children, isChecked, onClick }) => {
  const handleCheckboxChange = () => {
    onClick();
  };

  return (
    <label className={styles.label}>
      <button
        type="button"
        className={`${styles['custom-button']} ${isChecked ? styles.checked : ''}`}
        onClick={handleCheckboxChange}
      >
        {isChecked && <span className={styles.checkmark}>&#10003;</span>}
      </button>
      <span style={{ paddingLeft: '10px' }}>{children}</span>
    </label>
  );
};

export default Button;
