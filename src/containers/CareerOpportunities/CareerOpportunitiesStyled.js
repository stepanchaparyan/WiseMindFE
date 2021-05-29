import styled from 'styled-components';
import { tabletUp, desktopUp, desktopLargeUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  background-color: ${props => props.theme.lightOrange};
  min-height: 70vh;
  ${desktopLargeUp`
    min-height: 100vh;
  `};
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 24px;
  padding-bottom: 30px;
  font-size: 14px;
  overflow-wrap: break-word;
  ${tabletUp`
    margin: auto 60px;
    flex-direction: row;
    font-size: 16px;
    padding-bottom: 50px;
    padding-top: 200px;
  `};
  ${desktopUp`
    margin: auto 120px;
  `};
  ${desktopLargeUp`
    margin: auto 200px;
  `};
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${desktopLargeUp`
    margin: 0 140px 0 20px;
  `};
`;

export const MainText = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;
  line-height: 21px;
  *:nth-child(2) {
    font-weight: bold;
  }
  > span {
    display: block;
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 28px;
  align-items: center;
  margin: auto;
  ${desktopUp`
    text-indent: -75px;
    font-size: 48px;
    margin: 0 0 12px 70px;
  `};
  ${desktopLargeUp`
    margin: 0 0 12px 190px;
  `};
`;

export const LogoContainer = styled.div`
  margin: auto;
  padding: 0;
  ${tabletUp`
    margin: 30px 0 0 50px;
  `};
  ${desktopUp`
    margin: 30px 0 0 120px;
    min-width: 150px;
    border-radius: 90px;
    max-height: 150px;
    border: solid 3px white;
  `};
`;

export const Logo = styled.img`
  width: 130px;
  margin-top: 50px;
  ${desktopUp`
    width: 186px;
    margin: -27px -21px;
  `};
`;

export const VerticalLine = styled.div`
  display: none;
  background-color: ${props => props.theme.black};
  height: 400px;
  border-radius: 5px;
  margin: 0 60px;
  width: 12px;
  ${tabletUp`
    display: flex;
    height: 350px;
  `};
  ${desktopLargeUp`
    width: 8px;
  `};
`;
