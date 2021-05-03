import styled from 'styled-components';
import { tabletUp, desktopUp, desktopBigeUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props =>
    `linear-gradient(to bottom,transparent 70%,white 98%), url(${props.src})`};
  ${desktopUp`
    height: 100vh;
  `};
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallText = styled.h6`
  padding: 16px 0 8px 0;
  margin: 0;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  ${tabletUp`
    font-size: 24px;
  `};
`;

export const TitleText = styled.h1`
  font-family: 'Montserrat';
  font-size: 40px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  ${tabletUp`
    font-size: 64px;
  `};
  ${desktopUp`
    font-size: 54px;
  `};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  ${desktopUp`
    margin-top: 150px;
  `};
`;

export const LongText = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 4px;
`;

export const LogoContainer = styled.div`
  padding-top: 50px;
  ${desktopUp`
    padding-top: 80px;
  `};
`;

export const Logo = styled.img`
  width: 120px;
  ${desktopUp`
    width: 150px;
  `};
`;

export const ContactUsButton = styled.a`
  align-items: center;
  text-align: center;
  width: 80px;
  padding: 10px 16px;
  margin: auto 20px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 25px;
  font-size: 10px;
  letter-spacing: 1px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.veryDarkGray};
  transition: background-color 0.5s;
  :hover {
    background-color: ${props => props.theme.lightBlack};
  }
  ${tabletUp`
    margin: auto 60px;
    padding: 12px 24px;
    width: 90px;
  `};
  ${desktopUp`
    padding: 12px 24px;
    margin: auto 60px;
  `};
`;

export const AboutUsButton = styled.a`
  align-items: center;
  text-align: center;
  width: 80px;
  padding: 10px 16px;
  margin: auto 20px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 25px;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 1px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.veryDarkGray};
  transition: background-color 0.5s;
  :hover {
    background-color: ${props => props.theme.lightBlack};
  }
  ${tabletUp`
    margin: auto 50px;
    padding: 12px 24px;
    width: 90px;
  `};
  ${desktopUp`
    margin: auto 50px;
  `};
`;

export const TestContainer = styled.div`
  margin: 120px 0 30px;
  ${desktopUp`
    margin: 600px 0 0 0;
  `};
  ${desktopBigeUp`
    margin: 100px 0 0 0;
  `};
`;
