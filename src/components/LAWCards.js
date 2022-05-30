import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function LAWCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in LAW!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1>Li Ka Shing Building</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-law-reedz1.jpg'
              text='Reedz Cafe'
              label='Cafe'
              path='/reedz'
            />
          </ul>
          <h1>Block B</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-law-summit1.jpg'
              text='The Summit'
              label='Food Court'
              path='/thesummit'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LAWCards;