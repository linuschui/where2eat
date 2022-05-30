import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function UTNCards() {
  return (
    <div className='cards'>
      <h1>Check out dining options in UTown!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1>Town Plaza</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-utn-udon1.jpeg'
              text='Udon Don Bar'
              label='Japanese'
              path='/udondonbar'
            />
            <CardItem
              src='images/cards-utn-royals1.jpeg'
              text='The Royals Bistro'
              label='Western'
              path='/theroyalsbistro'
            />
            <CardItem
              src='images/cards-utn-finefood1.jpg'
              text='Fine Food'
              label='Food Court'
              path='/finefood'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-utn-sapore1.jpg'
              text='Sapore Italian Restaurant'
              label='Italian'
              path='/sapore'
            />
            <CardItem
              src='images/cards-utn-chopchop1.jpg'
              text='Chop Chop by PUTIEN'
              label='Chinese'
              path='/chopchop'
            />
            <CardItem
              src='images/cards-utn-hwangs1.jpg'
              text="Hwang's Korean Restaurant"
              label='Korean'
              path='/hwangs'
            />
          </ul>

          <h1>Stephen Riady Centre (SRC)</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-utn-waacow1.jpeg'
              text='Waa Cow'
              label='Japanese'
              path='/waacow'
            />
            <CardItem
              src='images/cards-utn-flavours1.jpg'
              text='Flavours @ UTown'
              label='Food Court'
              path='/flavours'
            />
            <CardItem
              src='images/cards-utn-supersnacks1.jpg'
              text='Super Snacks'
              label='Fast Food'
              path='/supersnacks'
            />
          </ul>

          <h1>Education Resource Centre (ERC)</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-utn-starbucks2.jpg'
              text='Starbucks'
              label='Cafe'
              path='/starbucks'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default UTNCards;