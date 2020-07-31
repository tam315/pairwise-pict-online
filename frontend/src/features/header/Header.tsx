import { css } from 'emotion';
import React from 'react';

export const Header = () => {
  const styles = {
    rootContainer: css`
      align-items: center;
      background: #333;
      color: white;
      display: flex;
      font-size: 1.5rem;
      height: 48px;
      padding-left: 1rem;
    `,
    icon: css`
      width: 32px;
      margin-right: 0.5rem;
    `,
    title: css`
      flex: 1;
      font-size: 1.5rem;
    `,
    coffeeImgContainer: css`
      border-radius: 5px;
      display: inline-flex;
      margin-right: 1rem;
      overflow: hidden;
      @media (max-width: 700px) {
        display: none;
      }
    `,
    coffeeImg: css`
      width: 130px;
    `,
    githubContainer: css`
      @media (max-width: 700px) {
        display: none;
      }
    `,
  };

  return (
    <div className={styles.rootContainer}>
      <img src="/icon.png" className={styles.icon} alt="document" />
      <h1 className={styles.title}>Pairwise Pict Online</h1>
      <a
        className={styles.coffeeImgContainer}
        href="https://www.buymeacoffee.com/FVSUK5u"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Buy Me A Coffee"
          className={styles.coffeeImg}
          src="https://cdn.buymeacoffee.com/buttons/lato-white.png"
        />
      </a>
      <div className={styles.githubContainer}>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=junkboy0315&repo=pairwise-pict-online&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          title="github star icon"
          width="160px"
          height="30px"
        ></iframe>
      </div>
    </div>
  );
};
