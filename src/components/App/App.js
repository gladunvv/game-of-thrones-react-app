import React, { Component } from 'react';
import { Header } from '../Header';
import { RandomChar } from '../RandomChar';
import { Button } from '../Button';
import { CharacterPage } from '../pages/CharacterPage';
import './App.scss';

export class App extends Component {
  state = {
    visibleRandomChar: true,
  };

  visibleClick = () => {
    this.setState((state) => {
      return {
        visibleRandomChar: !state.visibleRandomChar,
      };
    });
  };

  render() {
    const { visibleRandomChar, selectedChar } = this.state;

    const randomCharResolve = visibleRandomChar ? <RandomChar /> : null;
    return (
      <>
        <Header />
        <div className='sections-wrapper'>
          <section className='random-char'>
            {randomCharResolve}
            <Button onClick={this.visibleClick} buttonName='toggle' />
          </section>
          <CharacterPage />
          {/* <section className='item-list'>
            <ItemList onCharSelected={this.onCharSelected} />
          </section>
          <section className='char-details'>
            <CharDetails charId={selectedChar} />
          </section>
          <section className='item-list'>
            <ItemList onCharSelected={this.onCharSelected} />
          </section>
          <section className='char-details'>
            <CharDetails charId={selectedChar} />
          </section> */}
        </div>
      </>
    );
  }
}
