import React from 'react';

import './CharDetails.scss';

export const CharDetails = () => {
  return (
    <div className='char-details-block'>
      <span className='char-details-block__title'>John Snow</span>
      <ul className='details-list'>
        <li className='details-list__item'>
          <span className='term'>Gender</span>
          <span>male</span>
        </li>
        <li className='details-list__item'>
          <span className='term'>Born</span>
          <span>1783</span>
        </li>
        <li className='details-list__item'>
          <span className='term'>Died</span>
          <span>1820</span>
        </li>
        <li className='details-list__item'>
          <span className='term'>Culture</span>
          <span>First</span>
        </li>
      </ul>
    </div>
  );
};
