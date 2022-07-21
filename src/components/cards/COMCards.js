import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function COMCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in COM!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1>Deck</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-com-deck2.jpeg'
              text='The Deck'
              label='Food Court'
              path='/deck'
            />
            <CardItem
              src='images/cards-com-pastaexpress1.jpeg'
              text='Salad Express X Pasta Express'
              label='Western'
              path='/pastaexpress'
            />
            <CardItem
              src='images/cards-com-mala1.jpeg'
              text='Liang Ban Kung Fu'
              label='Chinese'
              path='/liangbankungfu'
            />
          </ul>
          <h1>Innovation 4.0</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-com-nami2.png'
              text='Nami'
              label='Western'
              path='/nami'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default COMCards;