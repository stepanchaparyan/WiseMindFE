import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './AboutStyled';
import { LINK } from '../../constants';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Module>
        <WelcomeText>{'PrivacyPolicy'}</WelcomeText>
        <LongText>{'PrivacyPolicy'}</LongText>
        <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
      </Module>
    </Container>
  );
};

export default PrivacyPolicy;
