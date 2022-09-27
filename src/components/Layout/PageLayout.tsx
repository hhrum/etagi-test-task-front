import React from 'react';
import classnames from 'classnames';

import PageLayoutProps from './PageLayout.types';

import './PageLayout.scss';

function PageLayout({
  className,
  header,
  children
}: PageLayoutProps) {
  
  const layoutClassName = classnames('page-layout', className);
  
  return (
    <div className={layoutClassName}>
      {header &&
        <div className="page-layout__header">{header}</div>
      }

      <div className="page-layout__content">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;