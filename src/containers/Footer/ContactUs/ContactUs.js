import React, { useState } from 'react';
import customObject from '../../../util/propTypes';
import {
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
import { BLANK, THERAPY_PORTAL } from '../../../constants/url';

const ContactUs = ({ texts, makeRequest, checkBoxText }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Container>
      <Texts>
        <TitleText>{texts?.title}</TitleText>
        <SmallText>{texts?.text}</SmallText>
      </Texts>
      <ButtonContainer>
        <ButtonStyled>
          <MailIcon />
          {makeRequest?.text}
        </ButtonStyled>
        <CheckBoxContainer>
          <input type="checkbox" defaultChecked={false} onClick={() => setChecked(!isChecked)} />
          {isChecked ? (
            <CheckboxText ischecked={isChecked} target={BLANK} href={THERAPY_PORTAL}>
              {checkBoxText?.text}
            </CheckboxText>
          ) : (
            <CheckboxText>{checkBoxText?.text}</CheckboxText>
          )}
        </CheckBoxContainer>
      </ButtonContainer>
    </Container>
  );
};

ContactUs.propTypes = {
  texts: customObject,
  makeRequest: customObject,
  checkBoxText: customObject
};

export default ContactUs;
