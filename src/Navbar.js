import React, { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { animateScroll as scroll } from 'react-scroll';

function Navbar({handleLogOut}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    scroll.scrollToTop();
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            WHR2EAT 
            <i className="fa-solid fa-bowl-rice"></i>
          </Link> 
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <i class="fa-solid fa-house"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/map'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                MAP <i class="fa-solid fa-location-crosshairs fa-fw"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/locations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                LOCATION <i class="fa-solid fa-location-dot fa-fw"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/search'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li>
            <li>  
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={handleLogOut}
              >
                LOG OUT
              </Link>
            </li>
          </ul>
          {button && <Button onClick={handleLogOut} buttonStyle='btn--outline'>LOG OUT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
