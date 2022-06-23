import React from 'react';
import '../App.css';
import { ButtonTRD } from './ButtonTRD'
import { ButtonCHK } from './ButtonCHK'
import { ButtonFAV } from './ButtonFAV'
import { ButtonKRN } from './ButtonKRN'
import { ButtonKRS } from './ButtonKRS'
import { ButtonBKT } from './ButtonBKT'
import './HeroSection.css';

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
        <ButtonCHK
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SEARCH <i class="fa-solid fa-magnifying-glass"></i>
        </ButtonCHK>
        <ButtonFAV
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          FAVOURITES <i class="fa-solid fa-star"></i>
        </ButtonFAV>
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
