import React, { Component } from 'react';
import { Header } from '../Header';
import { RandomChar } from '../RandomChar';
import { ItemList } from '../ItemList';
import { CharDetails } from '../CharDetails';
import { Button } from '../Button';
import './App.scss';

export class App extends Component {
  state = {
    visibleRandomChar: true,
    selectedChar: null,
  };

  visibleClick = () => {
    this.setState((state) => {
      return {
        visibleRandomChar: !state.visibleRandomChar,
      };
    });
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
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
          <section className='item-list'>
            <ItemList onCharSelected={this.onCharSelected} />
          </section>
        </div>
        <section className='char-details'>
          <CharDetails charId={selectedChar} />
        </section>
      </>
    );
  }
}
