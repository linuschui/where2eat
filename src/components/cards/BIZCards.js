import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function BIZCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in BIZ!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1>Mochtar Riady Building</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-biz-spread4.png'
              text='The Spread'
              label='Italian'
              path='/thespread'
            />
          </ul>
          <h1>Shaw Foundation Alumni House</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-biz-privegrill2.jpeg'
              text='Prive Grill University Club'
              label='Western'
              path='/privegrill'
            />
            <CardItem
              src='images/cards-biz-reedz1.jpeg'
              text='Reedz Cafe'
              label='Cafe'
              path='/reedz'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BIZCards;