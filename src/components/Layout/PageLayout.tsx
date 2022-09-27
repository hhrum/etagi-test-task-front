import React from 'react';
import classnames from 'classnames';

import PageLayoutProps from './PageLayout.types';

import './PageLayout.scss';

function PageLayout({
  className,
  headerClassName,
  contentClassName,
  header,
  children
}: PageLayoutProps) {
  
  const layoutClass = classnames('page-layout', className);
  const headerClass = classnames('page-layout__header', headerClassName);
  const contentClass = classnames('page-layout__content', contentClassName);

  return (
    <div className={layoutClass}>
      {header &&
        <div className={headerClass}>{header}</div>
      }

      <div className={contentClass}>
        {children}
      </div>
    </div>
  );
}

export default PageLayout;