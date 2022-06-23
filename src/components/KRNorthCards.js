import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function KRNorthCards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <h1>Kent Ridge North</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/utown.jpg'
              text='University Town'
              label='UTN'
              path='/utn'
            />
            <CardItem
              src='images/yih.jpg'
              text='Yusof Ishak House'
              label='YIH'
              path='/yih'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/music.jpg'
              text="Music"
              label='YST'
              path='/yst'
            />
            <CardItem
              src='images/usc.jpg'
              text='University Sports Centre'
              label='USC'
              path='/usc'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KRNorthCards;
