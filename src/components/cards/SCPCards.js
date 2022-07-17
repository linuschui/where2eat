import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function SCPCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in SCP!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-scp-ariseandshine1.jpeg'
              text='Arise and Shine'
              label='Cafe'
              path='/ariseandshine'
            />
            <CardItem
              src='images/cards-scp-starbucks1.jpeg'
              text='Starbucks'
              label='Cafe'
              path='/starbucks'
            />
          </ul>
          <h1>Frontier</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-scp-frontier1.jpeg'
              text='Frontier'
              label='Food Court'
              path='/frontier'
            />
            <CardItem
              src='images/cards-scp-liji2.jpeg'
              text='Li Ji Coffeehouse'
              label='Chinese'
              path='/lijicoffeehouse'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-scp-pastaexpress1.jpeg'
              text='Pasta Express'
              label='Western'
              path='/pastaexpress'
            />
            <CardItem
              src='images/cards-scp-ninefresh2.jpeg'
              text='Nine Fresh'
              label='Dessert'
              path='/ninefresh'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-scp-taiwanichiban1.jpeg'
              text='Taiwan Ichiban'
              label='Chinese'
              path='/taiwanichiban'
            />
            <CardItem
              src='images/cards-scp-unclepenyet1.jpeg'
              text='Uncle Penyet Fusion'
              label='Malay'
              path='/unclepenyet'
            />
          </ul>
          <h1>University Hall</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-scp-spinelli1.jpeg'
              text='Spinelli Coffee'
              label='Cafe'
              path='/spinelli'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SCPCards;