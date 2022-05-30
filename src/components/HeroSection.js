import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <img src='../images/img-home-display.jpg'  /> */}
      <h1>hungry?</h1>
      <p>what are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          TRENDING <i class="fa-solid fa-fire"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CHECKLIST <i class="fa-solid fa-bookmark"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          FAVOURITES <i class="fa-solid fa-star"></i>
        </Button>
      </div>
      <div className='hero-btns'>
        <Link to='/locations'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
          KENT RIDGE NORTH <i className="fa-solid fa-arrow-up" />
          </Button>
        </Link>
        <Link to='/locations'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
          KENT RIDGE SOUTH <i className="fa-solid fa-arrow-down" />
          </Button>
        </Link>
        <Link to='/usc' className='btn-mobile'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
          BUKIT TIMAH <i class="fa-solid fa-gavel"></i>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
