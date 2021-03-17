import React from 'react';
import Button from '../../../components/Button/Button';
import {
  Container,
  Module,
  SmallText,
  TitleText,
  ButtonsContainer,
  LongText
} from './WelcomeStyled';
import { LINK } from '../../../constants';
import theme from '../../../styles/theme';

const { lightBlue, navGreen, lightBlack, white } = theme;

const Welcome = () => {
  return (
    <Container>
      <Module>
        <SmallText>Mental health Services</SmallText>
        <TitleText>Wise Mind</TitleText>
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
        <LongText>
          Your solution to having more effective/productive mental fortitude for tomorrow.
        </LongText>
      </Module>
    </Container>
  );
};

export default Welcome;
