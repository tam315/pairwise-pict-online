import React from 'react';
import style from './Textarea.module.css';

export const Textarea = (props) => {
  const { onChange, value, ...rest } = props;
  return (
    <textarea
      className={style.rootContainer}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      {...rest}
    />
  );
};
