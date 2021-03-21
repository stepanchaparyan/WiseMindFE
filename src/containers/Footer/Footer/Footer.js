import React from 'react';
import customObject from '../../../util/propTypes';
import {
  Container,
  MainContainer,
  InfoContainer,
  Text,
  Address,
  AddressIcon,
  EmailContainer,
  EmailText,
  EmailSpan,
  MailIcon,
  Phone,
  PhoneIcon,
  PhoneText,
  LinksContainer,
  StyledLink,
  ArrowIcon,
  Arrow,
  NewsLetterContainer,
  NewsLetterText,
  BottomContainer,
  CompanyName,
  LogoContainer,
  ImageContainer,
  Logo,
  LogoText,
  TitleAndDate,
  SocialMedia,
  IconContainer,
  MediaIcon,
  Title,
  AllRightsReserved,
  DMCA
} from './FooterStyled';
import { LINK } from '../../../constants';
import { BLANK, FACEBOOK_LINK, TWITTER_LINK, INSTAGRAM_LINK } from '../../../constants/url';
import logo from '../../../assets/logo.png';

const facebook = 'facebook';
const twitter = 'twitter';
const instagram = 'instagram';
const alt = 'logo';

const Footer = ({
  infoText,
  address,
  phone,
  email,
  newsLetter,
  linksTitle,
  wiseMindFullName
  // linksNames,
  // linksAddresses
}) => {
  // console.log('linksNames', linksNames);

  const linksList = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/career_opportunities', text: 'Career Opportunities' },
    { to: '/client_resources', text: 'Client Resources' },
    { to: '/contact_us', text: 'Contact us' },
    { to: '/terms_conditions', text: 'Terms conditions' },
    { to: '/privacy_policy', text: 'Privacy policy' }
  ];

  // const linksList2 = linksNames?.text.map((item, i) => {
  //   return { to: linksAddresses[i], text: item };
  // });

  return (
    <Container>
      <MainContainer>
        <InfoContainer>
          <LogoContainer>
            <ImageContainer to={LINK.TO.HOME}>
              <Logo src={logo} alt={alt} />
            </ImageContainer>
            <LogoText>{wiseMindFullName?.text}</LogoText>
          </LogoContainer>
          <Text>{infoText?.text}</Text>
          <Address>
            <AddressIcon />
            {address?.title}
            {address?.text}
          </Address>
          <Phone>
            <PhoneIcon />
            <PhoneText href={`tel:${phone?.text}`}>
              {phone?.title}
              {phone?.text}
            </PhoneText>
          </Phone>
          <EmailContainer>
            <EmailSpan>
              <MailIcon />
              {email?.title}
            </EmailSpan>
            <EmailText href={`mailto:${email?.text}`}>{email?.text}</EmailText>
          </EmailContainer>
        </InfoContainer>
        <LinksContainer>
          <Title>{linksTitle?.text}</Title>
          {linksList.map(({ to, text }) => (
            <Arrow key={text}>
              <ArrowIcon />
              <StyledLink to={to}>{text}</StyledLink>
            </Arrow>
          ))}
        </LinksContainer>
        <NewsLetterContainer>
          <Title>{newsLetter?.title}</Title>
          <NewsLetterText>{newsLetter?.text}</NewsLetterText>
          <DMCA>
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=ee666a97-0e83-434e-b545-94a68eadadf8"
              title="DMCA.com Protection Status"
              className="dmca-badge"
            >
              <img
                src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-02.png?ID=ee666a97-0e83-434e-b545-94a68eadadf8"
                alt="DMCA.com Protection Status"
              />
            </a>
            <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
          </DMCA>
        </NewsLetterContainer>
      </MainContainer>
      <BottomContainer>
        <TitleAndDate>
          <CompanyName>{wiseMindFullName?.text}</CompanyName>
          <AllRightsReserved>{`© ${new Date().getFullYear()}. All rights reserved.`}</AllRightsReserved>
        </TitleAndDate>
        <SocialMedia>
          <IconContainer type={facebook} target={BLANK} href={FACEBOOK_LINK}>
            <MediaIcon type={facebook}></MediaIcon>
          </IconContainer>
          <IconContainer type={twitter} target={BLANK} href={TWITTER_LINK}>
            <MediaIcon type={twitter}></MediaIcon>
          </IconContainer>
          <IconContainer type={instagram} target={BLANK} href={INSTAGRAM_LINK}>
            <MediaIcon type={instagram}></MediaIcon>
          </IconContainer>
        </SocialMedia>
      </BottomContainer>
    </Container>
  );
};

Footer.propTypes = {
  infoText: customObject,
  address: customObject,
  phone: customObject,
  email: customObject,
  newsLetter: customObject,
  wiseMindFullName: customObject,
  linksTitle: customObject
};

export default Footer;
