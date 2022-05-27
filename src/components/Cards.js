import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC food destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-mcdonalds.jpeg'
              text='MCDONALDS MCDONALDS MCDONALDS MCDOANLDS'
              label='Fast Food'
              path='/products'
            />
            <CardItem
              src='images/img-japanese.jpg'
              text='JAPANESE JAPANESE JAPANESE JAPANESE'
              label='Japanese'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-thai.png'
              text='THAI THAI THAI THAI THAI THAI THAI'
              label='Thai'
              path='/products'
            />
            <CardItem
              src='images/img-indian2.jpg'
              text='INDIAN INDIAN INDIAN INDIAN INDIAN'
              label='Indian'
              path='/products'
            />
            <CardItem
              src='images/img-korean.jpg'
              text='KOREAN KOREAN KOREAN KOREAN KOREAN'
              label='Korean'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
