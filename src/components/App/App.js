import React from 'react';
import { Header } from '../Header';
import { RandomChar } from '../RandomChar';
import { ItemList } from '../ItemList';
import { CharDetails } from '../CharDetails';

import './App.scss';

export const App = () => {
  return (
    <>
      <Header />
      <div className='sections-wrapper'>
        <section className='random-char'>
          <RandomChar />
        </section>
        <section className='item-list'>
          <ItemList />
        </section>
      </div>
      <section className='char-details'>
        <CharDetails />
      </section>
    </>
  );
};
