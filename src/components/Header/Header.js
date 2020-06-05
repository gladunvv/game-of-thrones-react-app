import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
  return (
    <div className='header-block'>
      <div className='header-block__title'>
        <Link to='/'>Game of Thrones DB</Link>
      </div>
      <ul className='header-block__links'>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
        <li>
          <Link to='/houses'>Houses</Link>
        </li>
        <li>
          <Link to='/books'>Books</Link>
        </li>
      </ul>
    </div>
  );
};
