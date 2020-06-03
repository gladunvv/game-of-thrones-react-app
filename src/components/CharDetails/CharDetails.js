import React, { Component } from 'react';
import gotService from '../../services/gotService';
import './CharDetails.scss';

export class CharDetails extends Component {
  state = {
    char: null,
  };
  gotService = new gotService();

  updateChar() {
    const { charId } = this.props;
    if (!charId) {
      return;
    }
    this.gotService.getCharacter(charId).then((char) => {
      this.setState({ char });
    });
  }

  render() {
    return (
      <div className='char-details-block'>
        <span className='char-details-block__title'>John Snow</span>
        <ul className='details-list'>
          <li className='details-list__item'>
            <span className='term'>Gender</span>
            <span>male</span>
          </li>
          <li className='details-list__item'>
            <span className='term'>Born</span>
            <span>1783</span>
          </li>
          <li className='details-list__item'>
            <span className='term'>Died</span>
            <span>1820</span>
          </li>
          <li className='details-list__item'>
            <span className='term'>Culture</span>
            <span>First</span>
          </li>
        </ul>
      </div>
    );
  }
}
