import styled from 'styled-components';
import { mobile, desktopUp, tabletUp, desktopLargeUp } from '../../../styles/mediaQueries/mixins';
import Carousel from 'react-elastic-carousel';
import Facebook from '../../../assets/facebook.png';
import Twitter from '../../../assets/twitter.png';
import Instagram from '../../../assets/instagram.png';
import FacebookBlue from '../../../assets/facebook-blue.png';
import TwitterBlue from '../../../assets/twitter-blue.png';
import InstagramBlue from '../../../assets/instagram-blue.png';

export const EmployeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  ${desktopUp`
    padding: 60px 10px;
  `};
  ${desktopLargeUp`
    padding: 60px 100px;
  `};
`;

export const Employee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  ${tabletUp`
    flex-direction: row;
  `};
`;

export const CarouselStyled = styled(Carousel)`
  .rec.rec-arrow {
    width: 40px;
    height: 40px;
    min-width: 40px;
    line-height: 40px;
    font-size: 1.2em;
    margin: 0 4px;
  }
  .rec.rec-arrow {
  ${tabletUp`
    width: 50px;
    height: 50px;
    min-width: 50px;
    line-height: 50px;
    font-size: 1.6em;
    margin: 0;
  `}
  }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 0.9;
  flex-direction: column;
  margin: 16px;
  padding: 24px;
  outline: none;
`;

export const TitleText = styled.div`
  display: flex;
  padding: 20px 40px;
  margin: auto;
  font-size: 24px;
  font-family: 'Raleway';
  letter-spacing: 1.2px;
  text-align: center;
  color: ${props => props.theme.midLightBlack};
  :hover {
    color: ${props => props.theme.black};
  }
  ${desktopUp`
    padding: 20px 0;
    font-size: 36px;
  `};
`;

export const NameText = styled.div`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: ${props => props.theme.midLightBlack};
  :hover {
    color: ${props => props.theme.lightBlue};
  }
`;

export const MainText = styled.div`
  padding: 4px 0 24px 0;
  color: ${props => props.theme.moreDarkGray};
  line-height: 1.4;
`;

export const Overlay = styled.div`
  max-width: 300px;
  height: auto;
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;
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
    opacity: 0.8;
  }
  :hover > span {
    opacity: 0.9;
    margin-top: -10px;
  }
`;

export const Image = styled.img`
  ${mobile`
    width: 270px;
    min-width: 270px;
  `};
  width: 300px;
  min-width: 300px;
  height: auto;
`;

export const Media = styled.span`
  display: flex;
  position: absolute;
  z-index: 2;
  left: calc(50% - 77px);
  top: calc(50% - 30px);
  transition: all ease 0.5s;
  opacity: 0;
  color: white;
`;

export const MediaIcon = styled.div`
  background-image: ${props =>
    props.type === 'facebook'
      ? `url(${Facebook})`
      : props.type === 'twitter'
      ? `url(${Twitter})`
      : `url(${Instagram})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 16px;
  height: 16px;
`;

export const IconContainer = styled.div.attrs({ as: 'a' })`
  width: 16px;
  min-width: 16px;
  height: auto;
  border: 1px solid white;
  border-radius: 3px;
  padding: 14px;
  margin: 4px;
  :hover {
    background-color: white;
  }
  :hover > div {
    background-image: ${props =>
      props.type === 'facebook'
        ? `url(${FacebookBlue})`
        : props.type === 'twitter'
        ? `url(${TwitterBlue})`
        : `url(${InstagramBlue})`};
  }
`;
