import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function USCCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in USC!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-mcdonalds.jpeg'
              text='MCDONALDS MCDONALDS MCDONALDS MCDOANLDS'
              label='Fast Food'
              path='/'
            />
            <CardItem
              src='images/img-japanese.jpg'
              text='JAPANESE JAPANESE JAPANESE JAPANESE'
              label='Japanese'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-thai.png'
              text='THAI THAI THAI THAI THAI THAI THAI'
              label='Thai'
              path='/'
            />
            <CardItem
              src='images/img-indian2.jpg'
              text='INDIAN INDIAN INDIAN INDIAN INDIAN'
              label='Indian'
              path='/'
            />
            <CardItem
              src='images/img-korean.jpg'
              text='KOREAN KOREAN KOREAN KOREAN KOREAN'
              label='Korean'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default USCCards;
