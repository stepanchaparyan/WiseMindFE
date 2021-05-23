import styled from 'styled-components';
import { tabletUp, desktopUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  background-color: ${props => props.theme.lightGray};
`;

export const Context = styled.div`
  margin: auto 24px;
  padding-bottom: 30px;
  font-size: 14px;
  overflow-wrap: break-word;
  ${tabletUp`
    font-size: 16px;
    margin: auto 100px;
    padding-bottom: 50px;
  `};
`;

export const MainText = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;
  *:nth-child(2) {
    font-weight: bold;
  }
  > span {
    display: block;
  }
  ${tabletUp`
    > span {
      display: inline;
    }
  `};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  ${desktopUp`
    padding-left: 100px;
    padding-top: 100px;
    flex-direction: row;
  `};
`;

export const Title = styled.div`
  display: flex;
  font-size: 28px;
  align-items: center;
  margin: auto;
  ${desktopUp`
    font-size: 48px;
    margin: 0 0 12px 70px;
  `};
`;

export const LogoContainer = styled.div`
  margin: auto;
  padding: 0;
  ${desktopUp`
    margin: 0;
    padding-left: 150px;
  `};
`;

export const Logo = styled.img`
  width: 100px;
`;
