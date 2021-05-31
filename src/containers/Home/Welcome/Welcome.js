import React from 'react';
import PropTypes from 'prop-types';
import customObject from '../../../util/propTypes';
import { Container, SubTitle, Title, LongText, TextContainer } from './WelcomeStyled';

const Welcome = ({ shortText, appFullName, longText, welcomeImages }) => {
  const { image_url } =
    (welcomeImages?.length && welcomeImages.find(item => item.section === 'welcome')) || '';

  return (
    <Container src={image_url}>
      <TextContainer>
        <Title>{appFullName?.content}</Title>
        <SubTitle>{shortText?.content}</SubTitle>
        <LongText>{longText?.content}</LongText>
      </TextContainer>
    </Container>
  );
};

Welcome.propTypes = {
  shortText: customObject,
  appFullName: customObject,
  longText: customObject,
  whoWeAreButton: customObject,
  welcomeImages: PropTypes.array
};

export default Welcome;
