import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './ButtonStyled';

const Button = ({
  text,
  to,
  textcolor,
  texthovercolor,
  backgroundcolor,
  backgroundhovercolor,
  bordercolor,
  borderhovercolor
}) => {
  return (
    <ButtonStyled
      textcolor={textcolor}
      texthovercolor={texthovercolor}
      backgroundcolor={backgroundcolor}
      backgroundhovercolor={backgroundhovercolor}
      bordercolor={bordercolor}
      borderhovercolor={borderhovercolor}
      to={to}
    >
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textcolor: PropTypes.string,
  texthovercolor: PropTypes.string,
  backgroundcolor: PropTypes.string,
  backgroundhovercolor: PropTypes.string,
  bordercolor: PropTypes.string,
  borderhovercolor: PropTypes.string,
  to: PropTypes.string
};

Button.defaultProps = {
  to: '/',
  textcolor: 'white',
  texthovercolor: 'black',
  backgroundcolor: 'gray',
  backgroundhovercolor: 'lightGray',
  bordercolor: '',
  borderhovercolor: ''
};

export default Button;
