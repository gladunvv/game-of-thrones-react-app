import React, { Component } from 'react';
import { ItemList } from '../../ItemList';
import { ItemDetails, Field } from '../../ItemDetails';
import { ErrorMessage } from '../../ErrorMessage';
import { RowBlock } from '../../RowBlock';
import gotService from '../../../services/gotService';

import './CharacterPage.scss';

export class CharacterPage extends Component {
  state = {
    selectedChar: 130,
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  gotService = new gotService();

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    const { selectedChar, error } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );

    const charDetails = (
      <ItemDetails itemId={selectedChar} getData={this.gotService.getCharacter}>
        <Field field='gender' label='Gender' />
        <Field field='born' label='Born' />
        <Field field='died' label='Died' />
        <Field field='culture' label='Culture' />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={charDetails} />;
  }
}
