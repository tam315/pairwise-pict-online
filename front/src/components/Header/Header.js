import React from 'react';
import icon from '../../img/icon.png';
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
      <iframe
        src="https://ghbtns.com/github-btn.html?user=junkboy0315&repo=pairwise-pict-online&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        title="github star icon"
        width="160px"
        height="30px"
      ></iframe>
    </div>
  );
};

export default Header;
