import React from 'react';
import classnames from 'classnames';

import useAppSelector, {getLoader} from '../../hooks/useAppSelector';

import './Loader.scss';

function Loader() {
  
  const loader = useAppSelector(getLoader);
  
  const loaderWrapperClass = classnames('loader-wrapper', {
    'loader-wrapper--active': loader
  });
  
  return (
    <div className={loaderWrapperClass}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;