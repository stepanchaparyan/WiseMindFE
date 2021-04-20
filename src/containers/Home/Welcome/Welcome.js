import React from 'react';
import customObject from '../../../util/propTypes';
import Button from '../../../components/Button/Button';
import {
  Container,
  Module,
  SmallText,
  TitleText,
  ButtonsContainer,
  LongText,
  LogoContainer,
  Logo
} from './WelcomeStyled';
import { LINK } from '../../../constants';
import theme from '../../../styles/theme';
import logo from '../../../assets/logo.png';

const alt = 'logo';
const { lightBlue, navGreen, lightBlack, white } = theme;

const Welcome = ({ shortText, WiseMindFullName, longText }) => {
  return (
    <Container>
      <Module>
        <LogoContainer to={LINK.TO.HOME}>
          <Logo src={logo} alt={alt} />
        </LogoContainer>
        <SmallText>{shortText?.content}</SmallText>
        <TitleText>{WiseMindFullName?.content}</TitleText>
        <ButtonsContainer>
          <Button
            text="About Us"
            textcolor={white}
            texthovercolor={white}
            backgroundcolor={lightBlue}
            backgroundhovercolor={lightBlack}
            to={LINK.TO.ABOUT}
          />
          <Button
            text="Contact Us"
            textcolor={white}
            texthovercolor={white}
            backgroundcolor={navGreen}
            backgroundhovercolor={lightBlack}
            borderColor={white}
            to={LINK.TO.CONTACT_US}
          />
        </ButtonsContainer>
        <LongText>{longText?.content}</LongText>
      </Module>
    </Container>
  );
};

Welcome.propTypes = {
  shortText: customObject,
  WiseMindFullName: customObject,
  longText: customObject
};

export default Welcome;
