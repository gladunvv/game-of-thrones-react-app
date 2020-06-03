import React from 'react';

import './Button.scss';

export const Button = ({ buttonName, onClick }) => {
  return (
    <>
      <button onClick={onClick} className='button'>
        {buttonName}
      </button>
    </>
  );
};
