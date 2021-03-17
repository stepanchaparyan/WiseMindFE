import React, { useState, useEffect } from 'react';
import { Container, BlueButton, ArrowUp } from './ScrollToTopStyled';

const ScrollToTop = () => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', toggleVisibility);
    return () => document.removeEventListener('scroll', toggleVisibility);
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      {isVisible && (
        <BlueButton onClick={() => scrollTop()}>
          <ArrowUp></ArrowUp>
        </BlueButton>
      )}
    </Container>
  );
};

export default ScrollToTop;
