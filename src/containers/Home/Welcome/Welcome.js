import React from 'react';
import PropTypes from 'prop-types';
import customObject from '../../../util/propTypes';
import {
  Container,
  Module,
  SmallText,
  TitleText,
  ButtonsContainer,
  LongText,
  LogoContainer,
  Logo,
  ContactUsButton,
  AboutUsButton
} from './WelcomeStyled';
import { LINK, BLANK } from '../../../constants';
import logo from '../../../assets/logo.png';

const alt = 'astute logo';

const Welcome = ({
  shortText,
  appFullName,
  longText,
  welcomeImages,
  sentRequest,
  contactUsText,
  aboutUsText
}) => {
  const { image_url } =
    (welcomeImages?.length && welcomeImages.find(item => item.section === 'welcome')) || '';

  return (
    <Container src={image_url}>
      <Module>
        <LogoContainer to={LINK.TO.HOME}>
          <Logo src={logo} alt={alt} />
        </LogoContainer>
        <SmallText>{shortText?.content}</SmallText>
        <TitleText>{appFullName?.content}</TitleText>
        <ButtonsContainer>
          <AboutUsButton target={BLANK} href={sentRequest?.h_link}>
            {aboutUsText?.title}
          </AboutUsButton>
          <ContactUsButton target={BLANK} href={sentRequest?.h_link}>
            {contactUsText?.title}
          </ContactUsButton>
        </ButtonsContainer>
        <LongText>{longText?.content}</LongText>
      </Module>
    </Container>
  );
};

Welcome.propTypes = {
  shortText: customObject,
  appFullName: customObject,
  longText: customObject,
  sentRequest: PropTypes.object,
  contactUsText: customObject,
  aboutUsText: customObject,
  welcomeImages: PropTypes.array
};

export default Welcome;
