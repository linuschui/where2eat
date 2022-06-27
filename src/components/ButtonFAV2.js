import React from 'react';
import './Button.css';
import { animateScroll as scroll } from 'react-scroll';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const ButtonFAV2 = ({
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

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={scrollToTop}
        type={type}
      >
        {children}
      </button>
  );
};
