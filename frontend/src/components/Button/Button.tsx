import { cx } from 'emotion';
import React from 'react';
import style from './Button.module.css';

export const Button = (props) => {
  const { children, className, ...rest } = props;
  return (
    <button className={cx(style.button, className)} {...rest}>
      {children}
    </button>
  );
};
