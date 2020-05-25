import React from 'react';
import icon from '../../img/icon.png';
import githubPng from './github.png';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.rootContainer}>
      <img src={icon} className={style.icon} alt="document" />
      <span className={style.title}>Pairwise Pict Online</span>
      <a
        className={style.coffeeImgContainer}
        href="https://www.buymeacoffee.com/FVSUK5u"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Buy Me A Coffee"
          className={style.coffeeImg}
          src="https://cdn.buymeacoffee.com/buttons/lato-white.png"
        />
      </a>
      <a
        className={style.githubImgContainer}
        href="https://github.com/junkboy0315/pairwise-pict-online"
        target="_blank"
      >
        <img className={style.githubImg} src={githubPng} />
      </a>
    </div>
  );
};

export default Header;
