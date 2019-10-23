import React from 'react';
import icon from '../../img/icon.png';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.rootContainer}>
      <img src={icon} className={style.icon} alt="document" />
      Pairwise Pict Online
    </div>
  );
};

export default Header;
