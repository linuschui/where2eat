import React, { useRef } from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const ButtonTRD = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const trendingSection = useRef(null)
  const scrollDown = () => {
    window.scroll({
      top: window.screen.availHeight,
      behavior: 'smooth',
    });
  };
  
  return (
    <li className='btn-mobile' ref={trendingSection}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => scrollDown(trendingSection)}
        type={type}
      >
        {children}
      </button>
    </li>
  );
};
