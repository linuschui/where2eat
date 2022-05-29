import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function LocationCards() {
  return (
    <div className='cards'>
      <h1>Kent Ridge North</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/music.jpg'
              text='Music'
              label='YST'
              path='/yst'
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
              src='images/utown.jpg'
              text='University Town | Yale-NUS College'
              label='UTN'
              path='/utn'
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
      <h1>Kent Ridge South</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/business.jpg'
              text='Business'
              label='BIZ'
              path='/biz'
            />
            <CardItem
              src='images/dentistry.jpg'
              text='Medicine | Dentistry | Nursing'
              label='MDN'
              path='/mdn'
            />
          </ul>
          <ul className='cards__items'>  
            <CardItem
              src='images/computing.jpg'
              text='Computing'
              label='COM'
              path='/com'
            />
            <CardItem
              src='images/science.jpeg'
              text='Science | Pharmacy'
              label='SCP'
              path='/scp'
            />
            <CardItem
              src='images/sde.jpg'
              text='School of Design and Engineering'
              label='SDE'
              path='/sde'
            />
            <CardItem
              src='images/fass.png'
              text='Faculty of Arts and Social Sciences'
              label='FASS'
              path='/fass'
            />
          </ul>
        </div>
      </div>
      <h1>Bukit Timah</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/law.jpg'
              text='Law'
              label='LAW'
              path='/law'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LocationCards;
