import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { tabletUp, desktopUp } from '../../../styles/mediaQueries/mixins';
import FacebookMetal from '../../../assets/facebook-metal.png';
import TwitterMetal from '../../../assets/twitter-metal.png';
import InstagramMetal from '../../../assets/instagram-metal.png';
import FacebookBlue from '../../../assets/facebook-blue.png';
import TwitterBlue from '../../../assets/twitter-blue.png';
import InstagramBlue from '../../../assets/instagram-blue.png';
import MailIconPNG from '../../../assets/email.png';
import PhoneIconPNG from '../../../assets/mobile-phone.png';
import AddressIconPNG from '../../../assets/pin.png';
import ArrowIconPNG from '../../../assets/arrow.png';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.footerBlack};
  color: ${props => props.theme.footerTextColor};
  margin: 0;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 0.4px;
  margin: 20px 40px;
  justify-content: space-between;
  ${tabletUp`
    flex-direction: row;
    margin: 20px 100px;
  `};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: start;
  flex-wrap: no-wrap;
  ${tabletUp`
    flex-wrap: wrap;
    width: 50%;
  `};
`;

export const Text = styled.div`
  display: flex;
  padding: 10px 0 14px;
  line-height: 1.6;
  letter-spacing: 0.8px;
  width: 100%;
`;

export const Address = styled.div`
  display: flex;
  line-height: 1.4;
  letter-spacing: 0.6px;
  margin-bottom: 12px;
  width: 100%;
`;

export const AddressIcon = styled.div`
  padding: 2px 8px;
  margin: 3px 10px 0 0;
  height: 11px;
  width: 0;
  background-image: url(${AddressIconPNG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const EmailContainer = styled.div`
  display: flex;
  padding-top: 12px;
  line-height: 1.6;
  flex-direction: column;
  ${tabletUp`
    flex-direction: row;
  `};
`;

export const EmailSpan = styled.span`
  display: flex;
  padding-right: 8px;
`;

export const MailIcon = styled.div`
  padding: 2px 8px;
  margin: 3px 10px 0 0;
  height: 11px;
  width: 0;
  background-image: url(${MailIconPNG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const EmailText = styled.a`
  text-decoration: none;
  color: ${props => props.theme.footerTextColor};
  :hover {
    color: ${props => props.theme.midLightGray};
  }
`;

export const PhoneIcon = styled.div`
  padding: 2px 8px;
  margin-right: 10px;
  height: 11px;
  width: 0;
  background-image: url(${PhoneIconPNG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Phone = styled.div`
  display: flex;
`;

export const PhoneText = styled.a`
  text-decoration: none;
  color: ${props => props.theme.footerTextColor};
  :hover {
    color: ${props => props.theme.midLightGray};
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px 40px;
  ${tabletUp`
    flex-direction: row;
    padding: 10px 100px;
  `};
`;

export const TitleAndDate = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.4px;
  margin: auto 0;
  font-size: 16px;
  align-self: center;
  ${tabletUp`
    flex-direction: row;
  `};
`;

export const AllRightsReserved = styled.div`
  display: flex;
`;

export const CompanyNameContainer = styled.div`
  margin-bottom: 12px;
  text-align: center;
  ${tabletUp`
    display: flex;
  `};
`;

export const CompanyName = styled.div`
  cursor: pointer;
  align-self: center;
  color: inherit;
  :hover {
    color: ${props => props.theme.lightBlue};
    transition: color 0.5s;
  }
  ${tabletUp`
    margin-right: 10px;
  `};
`;

export const PrivacyPolicyAndTerms = styled.a`
  text-decoration: none;
  margin: 6px 0;
  color: ${props => props.theme.footerTextColor};
  :hover {
    color: ${props => props.theme.midLightGray};
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-self: center;
`;

export const MediaIcon = styled.div`
  background-image: ${props =>
    props.type === 'facebook'
      ? `url(${FacebookMetal})`
      : props.type === 'twitter'
      ? `url(${TwitterMetal})`
      : `url(${InstagramMetal})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 16px;
  height: 16px;
`;

export const IconContainer = styled.div.attrs({ as: 'a' })`
  padding: 14px;
  :hover > div {
    background-image: ${props =>
      props.type === 'facebook'
        ? `url(${FacebookBlue})`
        : props.type === 'twitter'
        ? `url(${TwitterBlue})`
        : `url(${InstagramBlue})`};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled(NavLink)`
  margin: 0;
  padding: 0;
`;

export const Logo = styled.img`
  width: 60px;
  ${desktopUp`
    width: 80px;
  `};
`;

export const AppName = styled.div`
  margin: 18px 0 18px 6px;
`;

export const LogoText = styled.div`
  display: flex;
  margin: auto 4px;
  font-size: 15px;
  cursor: pointer;
  color: white;
  :hover {
    color: ${props => props.theme.lightBlue};
    transition: color 0.5s;
  }
  ${tabletUp`
    font-size: 18px;
  `};
  ${desktopUp`
    font-size: 26px;
  `};
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  ${tabletUp`
    width: 18%;
  `};
`;

export const Title = styled.div`
  display: flex;
  color: white;
  font-size: 22px;
  margin: 40px 0 15px;
  ${tabletUp`
    margin: 12px 0 34px;
  `};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.footerTextColor};
  :hover {
    color: ${props => props.theme.midLightGray};
  }
  margin: 6px 0;
`;

export const ArrowIcon = styled.div`
  padding: 1px 4px;
  margin: 10px 10px 0 0;
  height: 6px;
  width: 0;
  background-image: url(${ArrowIconPNG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Arrow = styled.div`
  display: flex;
`;

export const AddressTitleContainer = styled.div`
  display: flex;
`;

export const AddressText = styled.div`
  display: flex;
  margin-left: 6px;
`;

export const DMCAContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  ${tabletUp`
    width: 16%;
    margin-top: 66px;
  `};
`;

export const DMCABadge = styled.div`
  margin: 10px 0 10px -4px;
`;

export const ZencareBadge = styled.div`
  & > iframe {
    width: 140px;
    height: 100px;
    border: none;
  }
`;
