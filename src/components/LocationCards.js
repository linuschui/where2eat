import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function LocationCards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <h1>Kent Ridge North</h1>
          
          <ul className='cards__items'>
            <CardItem
              src='images/pgpr.jpg'
              text="Prince George's Park Residences"
              label='PGPR'
              path='/pgpr'
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
              src='images/utown.jpg'
              text='University Town'
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
        
      <h1>Kent Ridge South</h1>
      
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
            <CardItem
              src='images/computing.jpg'
              text='Computing'
              label='COM'
              path='/com'
            />
          </ul>
          <ul className='cards__items'>  
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
        
        <h1>Bukit Timah</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/law1.jpg'
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
