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

const ContactUs = ({ texts }) => {
  const [isChecked, setChecked] = useState(false);
  const checkBoxText = 'I have read and agree to the terms & conditions';

  return (
    <Container>
      <Texts>
        <TitleText>{texts?.title}</TitleText>
        <SmallText>{texts?.text}</SmallText>
      </Texts>
      <ButtonContainer>
        <ButtonStyled>
          <MailIcon />
          MAKE REQUEST
        </ButtonStyled>
        <CheckBoxContainer>
          <input type="checkbox" defaultChecked={false} onClick={() => setChecked(!isChecked)} />
          {isChecked ? (
            <CheckboxText ischecked={isChecked} target={BLANK} href={THERAPY_PORTAL}>
              {checkBoxText}
            </CheckboxText>
          ) : (
            <CheckboxText>{checkBoxText}</CheckboxText>
          )}
        </CheckBoxContainer>
      </ButtonContainer>
    </Container>
  );
};

ContactUs.propTypes = {
  texts: customObject
};

export default ContactUs;
