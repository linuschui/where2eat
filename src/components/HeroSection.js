import React from 'react';
import '../App.css';
import { ButtonTRD } from './ButtonTRD'
import { ButtonCHK } from './ButtonCHK'
import { ButtonFAV } from './ButtonFAV'
import { ButtonKRN } from './ButtonKRN'
import { ButtonKRS } from './ButtonKRS'
import { ButtonBKT } from './ButtonBKT'
import './HeroSection.css';
import { ButtonRST } from './ButtonRST';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <img src='../images/img-home-display.jpg'  /> */}
      <h1>hungry?</h1>
      <p>what are you waiting for?</p>
      <div className='hero-btns'>
        <ButtonTRD
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          TRENDING <i class="fa-solid fa-fire"></i>
        </ButtonTRD>
        <ButtonFAV
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          FAVOURITES <i class="fa-solid fa-star"></i>
        </ButtonFAV>
        <ButtonRST
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ALL RESTAURANTS <i class="fa-solid fa-pizza-slice"></i>
        </ButtonRST>
      </div>
      <div className='hero-btns'>
        <ButtonKRN
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        KENT RIDGE NORTH <i className="fa-solid fa-arrow-up" />
        </ButtonKRN>
        <ButtonKRS
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        KENT RIDGE SOUTH <i className="fa-solid fa-arrow-down" />
        </ButtonKRS>
        <ButtonBKT
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        BUKIT TIMAH <i class="fa-solid fa-gavel"></i>
        </ButtonBKT> 
      </div>
    </div>
  );
}

export default HeroSection;
