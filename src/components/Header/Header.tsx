import React from 'react';
import classnames from 'classnames';

import HeaderProps from './Header.types';

import './Header.scss';

function Header({
  className,
  children
}: HeaderProps) {
  const headerClassName = classnames('header', className);
  return (
    <div className={headerClassName}>
      {children}
    </div>
  );
}

export default Header;