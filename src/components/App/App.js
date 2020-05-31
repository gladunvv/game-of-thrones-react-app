import React from 'react';
import { Header } from '../Header';
import { RandomChar } from '../RandomChar';
import { ItemList } from '../ItemList';
import { CharDeatails } from '../CharDetails';
import './App.scss';
export const App = () => {
  return (
    <>
      <Header />
      <RandomChar />
      <ItemList />
      <CharDeatails />
    </>
  );
};
