import React from 'react';
import { Container, Module, PageNotFoundText, LinkStyled } from './PageNotFoundStyled';
import { LINK } from '../../constants';

const NotFound = () => {
  return (
    <Container>
      <Module>
        <PageNotFoundText>{'Page Not Found'}</PageNotFoundText>
        <LinkStyled to={LINK.TO.HOME}>{'Go Home Page'}</LinkStyled>
      </Module>
    </Container>
  );
};
export default NotFound;
