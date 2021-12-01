import React from 'react';
import { useSelector } from 'react-redux';
import { footerObject } from '../../../util/propTypes';
import {
  Call911,
  Container,
  Texts,
  SmallText,
  TitleText,
  ButtonContainer,
  ButtonStyled,
  MailIcon,
  CheckBoxContainer,
  CheckboxText
} from './ContactUsStyled';
import { BLANK } from '../../../constants/url';

const ContactUs = ({ contactUsTitle, contactUsText, makeRequest, checkBoxText, suicidalText }) => {
  const { navbar } = useSelector(state => state.navbar);
  const sentRequest = navbar?.find(item => item.num === 0);

  return (
    <>
      <Call911>{suicidalText?.title}</Call911>
      <Container>
        <Texts>
          <TitleText>{contactUsTitle?.title}</TitleText>
          <SmallText>{contactUsText?.title}</SmallText>
        </Texts>
        <ButtonContainer>
          <ButtonStyled target={BLANK} href={sentRequest?.h_link}>
            <MailIcon />
            {makeRequest?.title}
          </ButtonStyled>
          <CheckBoxContainer>
            <CheckboxText target={BLANK} href={sentRequest?.h_link}>
              {checkBoxText?.title}
            </CheckboxText>
          </CheckBoxContainer>
        </ButtonContainer>
      </Container>
    </>
  );
};

ContactUs.propTypes = {
  contactUsTitle: footerObject,
  contactUsText: footerObject,
  makeRequest: footerObject,
  checkBoxText: footerObject,
  suicidalText: footerObject
};

export default ContactUs;
