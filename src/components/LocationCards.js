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
              label='Fast Food'
              path='/products'
            />  
            <CardItem
              src='images/yih.jpg'
              text='Yusof Ishak House'
              label='Japanese'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/utown.jpg'
              text='University Town | Yale-NUS College'
              label='Japanese'
              path='/products'
            />
            <CardItem
              src='images/usc.jpg'
              text='University Sports Centre'
              label='Japanese'
              path='/products'
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
              label='Fast Food'
              path='/products'
            />
            <CardItem
              src='images/dentistry.jpg'
              text='Medicine | Dentistry | Nursing'
              label='Korean'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>  
            <CardItem
              src='images/computing.jpg'
              text='Computing'
              label='Fast Food'
              path='/products'
            />
            <CardItem
              src='images/science.jpeg'
              text='Science | Pharmacy'
              label='Japanese'
              path='/products'
            />
            <CardItem
              src='images/sde.jpg'
              text='School of Design and Engineering'
              label='Thai'
              path='/products'
            />
            <CardItem
              src='images/fass.png'
              text='Faculty of Arts and Social Sciences'
              label='Indian'
              path='/products'
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
              label='Japanese'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LocationCards;
