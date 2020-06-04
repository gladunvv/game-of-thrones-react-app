import React, { Component } from 'react';
import { Loader } from '../Loader';

import './ItemList.scss';

export class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      console.log('itemList :>> ', itemList);
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li
          key={id}
          className='item-list-block__item'
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Loader />;
    }
    const items = this.renderItems(itemList);
    return <ul className='item-list-block'>{items}</ul>;
  }
}
