import React, { Component } from 'react';
import { Loader } from '../Loader';
import GotService from '../../services/gotService';

import './ItemList.scss';

export class ItemList extends Component {
  gotService = new GotService();
  state = {
    charList: null,
  };

  componentDidMount() {
    this.gotService.getAllCharacters().then((charList) => {
      this.setState({
        charList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item, i) => {
      return (
        <li
          key={i}
          className='item-list-block__item'
          onClick={this.props.onCharSelected(i)}
        >
          {item.name}
        </li>
      );
    });
  }

  render() {
    const { charList } = this.state;
    if (!charList) {
      return <Loader />;
    }
    const items = this.renderItems(charList);
    return <ul className='item-list-block'>{items}</ul>;
  }
}
