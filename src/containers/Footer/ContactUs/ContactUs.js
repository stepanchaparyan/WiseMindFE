import React, { useState } from 'react';
import { footerObject } from '../../../util/propTypes';
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

const ContactUs = ({ contactUsTitle, contactUsText, makeRequest, checkBoxText }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Container>
      <Texts>
        <TitleText>{contactUsTitle?.title}</TitleText>
        <SmallText>{contactUsText?.title}</SmallText>
      </Texts>
      <ButtonContainer>
        <ButtonStyled>
          <MailIcon />
          {makeRequest?.title}
        </ButtonStyled>
        <CheckBoxContainer>
          <input type="checkbox" defaultChecked={false} onClick={() => setChecked(!isChecked)} />
          {isChecked ? (
            <CheckboxText ischecked={isChecked} target={BLANK} href={THERAPY_PORTAL}>
              {checkBoxText?.title}
            </CheckboxText>
          ) : (
            <CheckboxText>{checkBoxText?.title}</CheckboxText>
          )}
        </CheckBoxContainer>
      </ButtonContainer>
    </Container>
  );
};

ContactUs.propTypes = {
  contactUsTitle: footerObject,
  contactUsText: footerObject,
  makeRequest: footerObject,
  checkBoxText: footerObject
};

export default ContactUs;
