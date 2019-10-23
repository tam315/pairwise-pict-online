import React from 'react';
import style from './Button.module.css';

const Button = props => {
  const { children, ...rest } = props;
  return (
    <button className={style.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
