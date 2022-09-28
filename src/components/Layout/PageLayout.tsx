import React from 'react';
import classnames from 'classnames';

import PageLayoutProps from './PageLayout.types';

import './PageLayout.scss';
import {Navigate} from 'react-router-dom';

function PageLayout({
  className,
  headerClassName,
  contentClassName,
  toolsClassName,

  header,
  children,
  tools,

  redirect,
}: PageLayoutProps) {
  
  const layoutClass = classnames('page-layout', className);
  const headerClass = classnames('page-layout__header', headerClassName);
  const contentClass = classnames('page-layout__content', contentClassName);
  const toolsClass = classnames('page-layout__tools', toolsClassName);

  return (
    <div className={layoutClass}>
      {header &&
        <div className={headerClass}>{header}</div>
      }

      <div className={contentClass}>
        {children}
      </div>

      <div className={toolsClass}>
        {tools}
      </div>

      {redirect && 
        <Navigate to={redirect} />
      }
    </div>
  );
}

export default PageLayout;