/* eslint-disable arrow-body-style */
import React from 'react';
import logo from '../../assets/header_img/Logo.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt="logo-airplane" />
    </header>
  );
};

export default Header;
