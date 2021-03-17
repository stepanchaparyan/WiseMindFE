import styled from 'styled-components';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const TreatmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.lightGray};
  padding: 60px 0;
  ${tabletUp`
    flex-direction: row;
  `};
`;

export const ButtonStyled = styled.button`
  margin: 10px 0;
  padding: 12px 10px;
  align-items: center;
  text-decoration: none;
  width: 45%;
  font-size: 16px;
  letter-spacing: 1px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  align-self: center;
  color: ${props => props.theme.black};
  background-color: transparent;
  transition: color 0.5s;
  :hover {
    color: ${props => props.theme.black};
    border: 1px solid black;
    transition: border 0.5s;
  }
`;

export const ThreePictures = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${tabletUp`
    flex-direction: row;
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
    width: 22%;
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
  display: flex;
  padding: 4px 24px 24px 24px;
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  align-self: center;
  margin-top: 16px;
`;
