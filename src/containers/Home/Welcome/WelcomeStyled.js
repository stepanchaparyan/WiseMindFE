import styled from 'styled-components';
import { tabletUp, desktopUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  background-image: ${props => `url(${props.src})`};
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${desktopUp`
    height: 100vh;
  `};
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const SmallText = styled.h6`
  padding: 16px 0;
  margin: 0;
  font-family: 'Montserrat';
  font-weight: bold;
  color: ${props => props.theme.purple};
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  ${tabletUp`
    font-size: 24px;
    color: ${props => props.theme.purple};
  `};
`;

export const TitleText = styled.h1`
  font-family: 'Montserrat';
  color: ${props => props.theme.black};
  font-size: 40px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 0;

  background: -webkit-linear-gradient(left, blue, orange);
  background: -o-linear-gradient(right, blue, orange);
  background: -moz-linear-gradient(right, blue, orange);
  background: linear-gradient(to right, blue, orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
    margin-top: 120px;
  `};
`;

export const LongText = styled.div`
  color: ${props => props.theme.white};
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  margin: 30px 0;
  ${desktopUp`
    margin-top: 150px;
    max-width: 40%;
  `};
`;

export const LogoContainer = styled.div`
  padding-top: 50px;
  ${desktopUp`
    padding-top: 80px;
  `};
`;

export const Logo = styled.img`
  width: 120px;
`;
