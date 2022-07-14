import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function USCCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in USC!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-usc-teaparty4.jpeg'
              text='The Tea Party'
              label='Western'
              path='/theteaparty'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default USCCards;
