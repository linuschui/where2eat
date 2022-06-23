import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function KRSouthCards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <h1>Kent Ridge South</h1>
          <ul className='cards__items'>
          <CardItem
              src='images/pgpr.jpg'
              text="Prince George's Park Residences"
              label='PGPR'
              path='/pgpr'
            />  
            <CardItem
              src='images/business.jpg'
              text='Business'
              label='BIZ'
              path='/biz'
            />
          </ul>
          <ul className='cards__items'> 
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
        </div>
      </div>
    </div>
  );
}

export default KRSouthCards;
