import React, { Component } from 'react';
import { ItemList } from '../../ItemList';
import { ItemDetails, Field } from '../../ItemDetails';
import { ErrorMessage } from '../../ErrorMessage';
import gotService from '../../../services/gotService';
import { RowBlock } from '../../RowBlock';

export class BookPage extends Component {
  state = {
    selectedBook: null,
    error: false,
  };

  gotService = new gotService();

  onItemSelected = (id) => {
    console.log('id :>> ', id);
    this.setState({
      selectedBook: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({ name }) => name}
      />
    );
    const bookDetails = (
      <ItemDetails
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook}
      >
        <Field field='numberOfPages' label='Number of pages' />
        <Field field='publisher' label='Publisher' />
        <Field field='released' label='Released' />
      </ItemDetails>
    );
    return <RowBlock left={itemList} right={bookDetails} />;
  }
}
