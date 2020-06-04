import React from 'react';

import './RowBlock.scss';

export const RowBlock = ({ left, right }) => {
  return (
    <>
      <section className='left-block'>{left}</section>
      <section className='right-block'>{right}</section>
    </>
  );
};
