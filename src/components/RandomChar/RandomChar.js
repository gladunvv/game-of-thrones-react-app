import React, { Component } from 'react';
import gotService from '../../services/gotService';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import './RandomChar.scss';

export class RandomChar extends Component {
  constructor() {
    super();
    this.updateChar();
  }

  gotService = new gotService();

  state = {
    char: {},
    loading: true,
    error: false,
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  updateChar() {
    const id = Math.floor(Math.random() * 140 + 25);
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  render() {
    const { char, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const loader = loading ? <Loader /> : null;
    const resolve = !(loading || errorMessage) ? (
      <ViewBlock char={char} />
    ) : null;
    return (
      <div className='random-block'>
        {errorMessage}
        {loader}
        {resolve}
      </div>
    );
  }
}

const ViewBlock = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <span className='random-block__title'>
        Random Character: <br /> <span className='title-name'>{name}</span>
      </span>
      <ul className='random-list'>
        <li className='random-list__item'>
          <span className='term'>Gender </span>
          <span>{gender}</span>
        </li>
        <li className='random-list__item'>
          <span className='term'>Born </span>
          <span>{born}</span>
        </li>
        <li className='random-list__item'>
          <span className='term'>Died </span>
          <span>{died}</span>
        </li>
        <li className='random-list__item'>
          <span className='term'>Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
