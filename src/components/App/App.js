import React, { Component } from 'react';
import { Header } from '../Header';
import { RandomChar } from '../RandomChar';
import { Button } from '../Button';
import { CharacterPage } from '../pages/CharacterPage';
import { BookPage } from '../pages/BooksPage';
import { HousesPage } from '../pages/HousesPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Router>
        <>
          <Header />
          <div className='sections-wrapper'>
            <section className='random-char'>
              {randomCharResolve}
              <Button onClick={this.visibleClick} buttonName='toggle' />
            </section>
            <Route path='/characters' component={CharacterPage} />
            <Route path='/houses' component={HousesPage} />
            <Route path='/books' exact component={BookPage} />
          </div>
        </>
      </Router>
    );
  }
}
