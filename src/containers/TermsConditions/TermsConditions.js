import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './AboutStyled';
import { LINK } from '../../constants';

const TermsConditions = () => {
  return (
    <Container>
      <Module>
        <WelcomeText>{'TermsConditions'}</WelcomeText>
        <LongText>{'TermsConditions'}</LongText>
        <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
      </Module>
    </Container>
  );
};

export default TermsConditions;
