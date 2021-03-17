import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './ClientResourcesStyled';
import { LINK } from '../../constants';

const ClientResources = () => {
  return (
    <>
      <Container>
        <Module>
          <WelcomeText>ClientResources</WelcomeText>
          <LongText>ClientResources</LongText>
          <LinkStyled to={LINK.TO.HOME}>GO HOME</LinkStyled>
        </Module>
      </Container>
    </>
  );
};

export default ClientResources;
