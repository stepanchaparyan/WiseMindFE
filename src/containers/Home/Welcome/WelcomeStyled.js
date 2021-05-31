import styled from 'styled-components';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props =>
    `linear-gradient(to bottom,transparent 70%,white 98%), url(${props.src})`};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  ${tabletUp`
    margin-bottom: 50px;
  `};
`;

export const Title = styled.h1`
  font-size: 28px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  margin: 0;
  ${tabletUp`
    font-size: 54px;
  `};
`;

export const SubTitle = styled.h2`
  padding-bottom: 8px;
  margin: 0;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  ${tabletUp`
    font-size: 44px;
  `};
`;

export const LongText = styled.div`
  text-align: center;
  margin: 6px 20px 0;
  font-size: 12px;
  ${tabletUp`
    font-size: 18px;
  `};
`;
