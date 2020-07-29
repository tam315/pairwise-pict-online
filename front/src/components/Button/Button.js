import React from 'react';
import style from './Button.module.css';

export const Button = (props) => {
  const { children, ...rest } = props;
  return (
    <button className={style.button} {...rest}>
      {children}
    </button>
  );
};
