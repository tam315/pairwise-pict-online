import React from 'react';
import style from './Textarea.module.css';

const Textarea = props => {
  const { onChange, value } = props;
  return (
    <textarea
      className={style.rootContainer}
      onChange={e => onChange(e.target.value)}
      value={value}
    >
      enter test spec here
    </textarea>
  );
};

export default Textarea;
