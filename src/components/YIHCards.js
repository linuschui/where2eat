import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function YIHCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in YIH!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-yih-centralsquare1.jpeg'
              text='Central Square'
              label='Food Court'
              path='/centralsquare'
            />
            <CardItem
              src='images/cards-yih-flash1.jpeg'
              text='Flash Coffee'
              label='Cafe'
              path='/flashcoffee'
            />
            <CardItem
              src='images/cards-yih-koi1.jpeg'
              text='KOI Thé'
              label='Drinks'
              path='/koi'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default YIHCards;