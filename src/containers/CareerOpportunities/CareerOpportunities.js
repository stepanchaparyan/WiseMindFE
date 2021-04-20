import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './CareerOpportunitiesStyled';
import { LINK } from '../../constants';

const CareerOpportunities = () => {
  return (
    <>
      <Container>
        <Module>
          <WelcomeText>{'CareerOpportunities'}</WelcomeText>
          <LongText>{'CareerOpportunities'}</LongText>
          <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
        </Module>
      </Container>

      <Module>
        <WelcomeText>{'welcome'}</WelcomeText>
        <LongText>{'Astute care path ways'}</LongText>
        <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
      </Module>
      <Module>
        <WelcomeText>{'welcome'}</WelcomeText>
        <LongText>{'Astute care path ways'}</LongText>
        <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
      </Module>
    </>
  );
};

export default CareerOpportunities;
