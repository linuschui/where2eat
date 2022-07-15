import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function MDNCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in MDN!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-mdn-eureka2.jpeg'
              text='Eureka Taste'
              label='Cafe'
              path='/eurekataste'
            />
            <CardItem
              src='images/cards-mdn-jewel1.jpeg'
              text='Jewel Coffee'
              label='Cafe'
              path='/jewelcoffee'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MDNCards;