import React, {ChangeEvent, useId, useState} from 'react';
import classnames from 'classnames';

import InputProps from './Input.types';

import './Input.scss';

function Input({
  label,
  type = 'text',

  max,
  min,

  value,
  onChange
}: InputProps) {

  const inputId = useId();
  const [focus, setFocus] = useState(false);

  const labelClassName = classnames('input__label', {
    'input__label--active': value || focus
  });
  
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="input">
      {label &&
        <label
          htmlFor={inputId}
          className={labelClassName}
        >{label}</label>
      }
      <input
        id={inputId}
        type={type}

        max={max}
        min={min}

        className="input__input"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Input;