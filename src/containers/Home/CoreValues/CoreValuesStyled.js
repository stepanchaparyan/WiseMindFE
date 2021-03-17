import styled from 'styled-components';
import CoreValueBGImage from '../../../assets/bg-core-values.jpg';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const CoreValesContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${tabletUp`
    flex-direction: row;
  `};
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 1.8;
  color: ${props => props.theme.midLightGray};
  background-image: url(${CoreValueBGImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${tabletUp`
    width: 23%;
  `};
`;

export const Title = styled.div`
  padding: 20px 0;
  font-size: 22px;
  font-weight: bold;
`;

export const ButtonStyled = styled.button`
  margin: 20px 70px 20px 0;
  padding: 14px 40px;
  align-items: center;
  text-decoration: none;
  border-radius: 3px;
  font-size: 12px;
  letter-spacing: 1px;
  border: 1px solid gray;
  cursor: pointer;
  color: ${props => props.theme.midLightGray};
  background-color: transparent;
  transition: color 0.5s;
  :hover {
    color: white;
    border: 1px solid white;
    transition: border 0.5s;
  }
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${tabletUp`
    width: 77%;
  `};
`;

export const ThreePictures = styled.div`
  display: flex;
  color: green;
  flex-wrap: wrap;
  flex-direction: column;
  ${tabletUp`
    flex-direction: row;
  `};
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${props => props.theme.veryDarkGray};
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 1.8;
  flex-direction: column;
  ${tabletUp`
    width: 33%;
  `};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  max-width: 100%;
  height: auto;
  position: relative;
  cursor: pointer;
  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 0.5s;
  }
  :hover:after {
    opacity: 0.6;
  }
  :hover > span {
    opacity: 0.9;
    margin-top: -10px;
  }
`;

export const Dots = styled.span`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transition: all ease 0.5s;
  opacity: 0;
  color: white;
`;

export const TitleText = styled.div`
  display: flex;
  padding: 24px 24px 4px 24px;
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.theme.midLightBlack};
  :hover {
    color: ${props => props.theme.lightBlue};
  }
`;

export const MainText = styled.div`
  display: flex;
  padding: 4px 24px 24px 24px;
`;

export const WhoWeAre = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.lightGray};
  align-items: center;
  color: ${props => props.theme.midLightBlack};
  align-self: center;
  padding-bottom: 56px;
`;

export const WhoWeAreTitleText = styled.div`
  display: flex;
  padding: 24px 24px 4px 24px;
  font-size: 44px;
  letter-spacing: 1.8px;
  transition: color 0.5s;
  :hover {
    color: ${props => props.theme.lightBlue};
  }
  ${tabletUp`
    font-size: 48px;
  `};
`;

export const WhoWeAreMainText = styled.div`
  display: flex;
  padding: 4px 24px 24px 24px;
  color: ${props => props.theme.veryDarkGray};
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 1.8;
`;
