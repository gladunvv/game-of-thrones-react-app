import React from 'react';

import './Header.scss';

export const Header = () => {
  return (
    <div className='header-block'>
      <div className='header-block__title'>
        <a href='#'>Game of Thrones DB</a>
      </div>
      <ul className='header-block__links'>
        <li>
          <a href='#'>Characters</a>
        </li>
        <li>
          <a href='#'>Houses</a>
        </li>
        <li>
          <a href='#'>Books</a>
        </li>
      </ul>
    </div>
  );
};
