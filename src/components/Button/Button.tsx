import React from 'react';
import classnames from 'classnames';

import Ripple from '../Ripple';

import ButtonProps from './Button.types';

import './Button.scss';

function Button({
  className,
  content,
  onClick
}: ButtonProps) {

  const buttonClassName = classnames('button', className);
  
  return (
    <button
      className={buttonClassName}
      onClick={onClick}
    >
      {content}

      <Ripple />
    </button>);
}

export default Button;