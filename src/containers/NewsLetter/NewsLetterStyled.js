import styled from 'styled-components';
import { desktopUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  background-color: ${props => props.theme.gray1};
`;

export const TitleContainer = styled.div`
  display: flex;
  padding-top: 70px;
  margin: auto;
  justify-content: center;
  ${desktopUp`
    padding-top: 90px;
  `};
`;

export const Title = styled.div`
  display: flex;
  font-size: 32px;
  align-items: center;
  margin: auto;
  padding-bottom: 24px;
  ${desktopUp`
    font-size: 56px;
    margin: 0 0 12px 70px;
  `};
`;

export const NewsContainer = styled.div`
  margin: auto;
  padding: 0;
  ${desktopUp`
    margin: 0 80px;
  `};
`;

export const News = styled.img`
  width: 100%;
  padding-bottom: 48px;
  ${desktopUp`
    padding-bottom: 60px;
  `};
`;
