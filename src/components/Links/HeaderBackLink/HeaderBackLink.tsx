import React, {useState} from 'react';
import {MdArrowBack} from 'react-icons/md';
import {Navigate} from 'react-router-dom';

import Ripple from '../../Ripple';

import HeaderBackLinkProps from './HeaderBackLink.types';

import './HeaderBackLink.scss';

function HeaderBackLink({
  to
}: HeaderBackLinkProps) {

  const [redirect, setRedirect] = useState<string|null>(null);
  
  return (
    <div
      className="header-back-link"
      onClick={() => setTimeout(() => setRedirect(to),500)}
    >
      <MdArrowBack />

      <Ripple />

      {redirect && 
        <Navigate to={redirect} />
      }
    </div>
  );
}

export default HeaderBackLink;