import styled from 'styled-components';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const TreatmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.lightGray};
  padding: 60px 0;
  ${tabletUp`
    flex-direction: row;
    flex-flow: wrap;
    > :nth-child(n+4) {
      width: 40%;
      text-align: left;
    }
  `};
`;

export const ButtonStyled = styled.span`
  margin: 0 8px;
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.theme.lightBlue};
  font-weight: bold;
  transition: color 0.5s;
  :hover {
    color: ${props => props.theme.medBlue};
  }
`;

export const ThreePictures = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${tabletUp`
    flex-direction: row;
    width: 30%;
  `};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.veryDarkGray};
  background: ${props => props.color};
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 1.8;
  flex-direction: column;
  margin: 16px;
  padding: 24px;
  ${tabletUp`
    min-width: 22%;
  `};
  transition: margin-top 0.5s;
  :hover {
    margin-top: 10px;
    transition: margin-top 0.3s;
  }
`;

export const TitleText = styled.div`
  display: flex;
  padding: 18px 0 4px 0;
  font-weight: bold;
  font-size: 18px;
  align-self: center;
  color: ${props => props.theme.midLightBlack};
  :hover {
    color: ${props => props.theme.lightBlue};
  }
`;

export const MainText = styled.div`
  color: ${props => props.theme.moreDarkGray};
  text-indent: 16px;
  > span {
    display: grid;
  }
`;
