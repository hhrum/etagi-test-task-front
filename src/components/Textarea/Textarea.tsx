import React, {ChangeEvent, useId, useState} from 'react';
import classnames from 'classnames';

import TextareaProps from './Textarea.types';

import './Textarea.scss';

function Textarea ({
  label,
  value,
  onChange
}: TextareaProps) {

  const inputId = useId();
  const [focus, setFocus] = useState(false);

  const labelClassName = classnames('textarea__label', {
    'textarea__label--active': value || focus
  });

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="textarea">
      {label &&
        <label
          htmlFor={inputId}
          className={labelClassName}
        >{label}</label>
      }
      <textarea
        id={inputId}
        className="textarea__input"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Textarea;