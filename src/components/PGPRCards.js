import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function PGPRCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in PGPR!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1>My Village</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-pgpr-bober1.jpg'
              text='Bober Tea'
              label='Drinks'
              path='/bober'
            />
            <CardItem
              src='images/cards-pgpr-bakes1.jpg'
              text='Bakes and Bites'
              label='Cafe'
              path='/bakesandbites'
            />
            <CardItem
            src='images/cards-pgpr-lejomo1.jpg'
            text='LeJomo'
            label='Cafe'
            path='/lejomo'
            />
          </ul>
          <h1>PGPR</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-pgpr-acfoodcourt1.jpg'
              text='PGPR Air-Con Canteen'
              label='Food Court'
              path='/airconcanteen'
            />
            <CardItem
              src='images/cards-pgpr-supersnacks1.jpg'
              text='Super Snacks'
              label='Fast Food'
              path='/supersnacks'
            />
            <CardItem
              src='images/cards-pgpr-nonaccanteen1.jpg'
              text='PGPR Non Air-Con Canteen'
              label='Food Court'
              path='/nonairconcanteen'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PGPRCards;
