import React, { Component } from 'react';
import './ItemDetails.scss';

export const Field = ({ item, field, label }) => {
  return (
    <li className='details-list__item'>
      <span className='term'>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export class ItemDetails extends Component {
  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      this.setState({ item });
    });
  }

  render() {
    if (!this.state.item) {
      return (
        <span className='select-error'>Please select item in the list</span>
      );
    }

    const { item } = this.state;
    const { name } = item;
    return (
      <div className='item-details-block'>
        <span className='item-details-block__title'>{name}</span>
        <ul className='details-list'>
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    );
  }
}
