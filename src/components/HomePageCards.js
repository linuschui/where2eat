import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function HomePageCards() {
  return (
    <div className='cards'>
      <h1>Check out what's trending in NUS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-utn-udon1.jpeg'
              text='Udon Don Bar'
              label='Japanese'
              path='/udondonbar'
            />
            <CardItem
            src='images/cards-pgpr-lejomo1.jpg'
            text='LeJomo'
            label='Cafe'
            path='/lejomo'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-utn-starbucks2.jpg'
              text='Starbucks'
              label='Cafe'
              path='/starbucks'
            />
            <CardItem
              src='images/cards-utn-waacow1.jpeg'
              text='Waa Cow'
              label='Japanese'
              path='/waacow'
            />
            <CardItem
              src='images/cards-pgpr-bober1.jpg'
              text='Bober Tea'
              label='Drinks'
              path='/bober'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePageCards;
