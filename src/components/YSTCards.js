import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function YSTCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in YST!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-yst-barbar1.jpeg'
              text='Bar Bar Black Sheep'
              label='Western'
              path='/barbarblacksheep'
            />
            <CardItem
              src='images/cards-yst-foreword1.jpeg'
              text='Foreword Coffee Roaster'
              label='Cafe'
              path='/forewordcoffeeroaster'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default YSTCards;