import styled from 'styled-components';
import MainImage from '../../../assets/bg.webp';
import { desktopUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  background-image: url(${MainImage});
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

export const SmallText = styled.div`
  margin-top: 80px;
  padding: 16px 0px;
  font-family: 'Montserrat';
  font-weight: bold;
  color: ${props => props.theme.white};
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  ${desktopUp`
    margin-top: 110px;
  `};
`;

export const TitleText = styled.div`
  font-family: 'Montserrat';
  color: ${props => props.theme.white};
  font-size: 55px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
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
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  margin: 30px 0;
  ${desktopUp`
    margin-top: 100px;
  `};
`;
