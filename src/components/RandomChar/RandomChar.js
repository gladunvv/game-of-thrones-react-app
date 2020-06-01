import React from 'react';

import './RandomChar.scss';

export const RandomChar = () => {
  return (
    <div className='random-block'>
      <span className='random-block__title'>Random Character: Jhon</span>
      <ul className='random-list'>
        <li className='random-list__item'>
          <span className='term'>Gender </span>
          <span>male</span>
        </li>
        <li className='random-list__item'>
          <span className='term'>Born </span>
          <span>11.03.1039</span>
        </li>
        <li className='random-list__item'>
          <span className='term'>Died </span>
          <span>13.09.1089</span>
        </li>
        <li className='random-list__item'>
          <span className='term'>Culture </span>
          <span>Anarchy</span>
        </li>
      </ul>
    </div>
  );
};
