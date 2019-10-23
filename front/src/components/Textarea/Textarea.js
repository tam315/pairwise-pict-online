import React from 'react';
import style from './Textarea.module.css';

const Textarea = props => {
  const { onChange, value, ...rest } = props;
  return (
    <textarea
      className={style.rootContainer}
      onChange={e => onChange(e.target.value)}
      value={value}
      {...rest}
    >
      enter test spec here
    </textarea>
  );
};

export default Textarea;
