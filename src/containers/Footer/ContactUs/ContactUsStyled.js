import styled from 'styled-components';
import { tabletUp, desktopUp } from '../../../styles/mediaQueries/mixins';
import MailIconPNG from '../../../assets/email.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.lighterBlue};
  height: 270px;
  padding: 50px;
  ${tabletUp`
    height: 160px;
    flex-direction: row;
    padding: 40px 100px 30px 100px;
  `};
  ${desktopUp`
    height: 100px;
  `};
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.white};
`;

export const TitleText = styled.div`
  font-family: 'Raleway';
  font-size: 24px;
  line-height: 1.2;
  align-self: start;
`;

export const SmallText = styled.div`
  font-family: 'Lora';
  margin: 10px 0 0;
  max-width: 520px;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 1px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;

export const ButtonStyled = styled.button`
  min-width: 180px;
  width: 180px;
  margin: 24px 0 8px 5px;
  padding: 10px;
  align-items: center;
  text-decoration: none;
  border-radius: 3px;
  font-size: 12px;
  letter-spacing: 1px;
  border: ${props => `1px solid ${props.theme.lightgray}`};
  cursor: pointer;
  outline: none;
  color: ${props => props.theme.lightgray};
  background-color: transparent;
  transition: color 0.5s;
  :hover {
    color: ${props => props.theme.white};
    border: ${props => `1px solid ${props.theme.white}`};
    transition: border 0.5s;
  }
`;

export const MailIcon = styled.div.attrs({ as: 'span' })`
  padding: 0px 8px;
  margin-right: 16px;
  background-image: url(${MailIconPNG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CheckBoxContainer = styled.div``;

export const CheckboxText = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: white;
  margin-left: 4px;
  cursor: ${props => (props.ischecked ? 'pointer' : 'not-allowed')};
`;

export const MainContainer = styled.div`
  position: absolute;
  bottom: 0;
`;
