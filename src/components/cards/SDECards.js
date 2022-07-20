import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function SDECards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in SDE!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/cards-sde-huggs1.jpeg'
              text='Huggs Coffee'
              label='Cafe'
              path='/huggscoffee'
            />
            <CardItem
              src='images/cards-sde-spinelli1.jpeg'
              text='Spinelli Coffee Company'
              label='Cafe'
              path='/spinelli'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-sde-ariseandshine2.jpeg'
              text='Arise and Shine'
              label='Cafe'
              path='/ariseandshine'
            />
            <CardItem
              src='images/cards-sde-e2kitchen1.jpeg'
              text='E2 Kitchen'
              label='Chinese'
              path='/e2kitchen'
            />
          </ul>
          <h1>Techno Edge</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-sde-liho1.jpeg'
              text='Liho'
              label='Drinks'
              path='/liho'
            />
            <CardItem
              src='images/cards-sde-starbucks3.jpeg'
              text='Starbucks'
              label='Cafe'
              path='/starbucks'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-sde-technoedge1.jpeg'
              text='Techno Edge'
              label='Food Court'
              path='/technoedge'
            />
            <CardItem
              src='images/cards-sde-bistrobox1.jpeg'
              text='Bistro Box'
              label='Western'
              path='/bistrobox'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SDECards;