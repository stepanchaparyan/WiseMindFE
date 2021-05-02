import React from 'react';
import PropTypes from 'prop-types';
import { footerObject } from '../../../util/propTypes';
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
  AddressTitleContainer,
  AddressText,
  DMCA
} from './FooterStyled';
import { LINK } from '../../../constants';
import { BLANK, FACEBOOK_LINK, TWITTER_LINK, INSTAGRAM_LINK } from '../../../constants/url';
import logo from '../../../assets/logo.png';

const facebook = 'facebook';
const twitter = 'twitter';
const instagram = 'instagram';
const alt = 'astute logo';

const Footer = ({
  infoText,
  address,
  addressText,
  phone,
  phoneText,
  email,
  emailText,
  appFullName,
  linksTitle,
  linksNames,
  newsLetterTitle,
  newsLetterText,
  allRights
}) => {
  return (
    <Container>
      <MainContainer>
        <InfoContainer>
          <LogoContainer>
            <ImageContainer to={LINK.TO.HOME}>
              <Logo src={logo} alt={alt} />
            </ImageContainer>
            <LogoText>{appFullName?.title}</LogoText>
          </LogoContainer>
          <Text>{infoText?.title}</Text>
          <Address>
            <AddressTitleContainer>
              <AddressIcon />
              <div>{addressText?.title}</div>
            </AddressTitleContainer>
            <AddressText>{address?.title}</AddressText>
          </Address>
          <Phone>
            <PhoneIcon />
            <PhoneText href={`tel:${phone?.title}`}>
              {phoneText?.title} {phone?.title}
            </PhoneText>
          </Phone>
          <EmailContainer>
            <EmailSpan>
              <MailIcon />
              {emailText?.title}
            </EmailSpan>
            <EmailText href={`mailto:${email?.title}`}>{email?.title}</EmailText>
          </EmailContainer>
        </InfoContainer>
        <LinksContainer>
          <Title>{linksTitle?.title}</Title>
          {linksNames?.map(({ h_link, title }) => (
            <Arrow key={title}>
              <ArrowIcon />
              <StyledLink to={h_link}>{title}</StyledLink>
            </Arrow>
          ))}
        </LinksContainer>
        <NewsLetterContainer>
          <Title>{newsLetterTitle?.title}</Title>
          <NewsLetterText>{newsLetterText?.title}</NewsLetterText>
          <DMCA>
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=a3258b30-9793-4632-9dcf-9bf92a6549a2"
              title="DMCA.com Protection Status"
              className="dmca-badge"
            >
              <img
                src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=a3258b30-9793-4632-9dcf-9bf92a6549a2"
                alt="DMCA.com Protection Status"
              />
            </a>{' '}
            <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
          </DMCA>
        </NewsLetterContainer>
      </MainContainer>
      <BottomContainer>
        <TitleAndDate>
          <CompanyName>{appFullName?.title}</CompanyName>
          <AllRightsReserved>{`© ${new Date().getFullYear()}. ${
            allRights?.title
          }`}</AllRightsReserved>
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
  infoText: footerObject,
  address: footerObject,
  addressText: footerObject,
  phone: footerObject,
  phoneText: footerObject,
  email: footerObject,
  emailText: footerObject,
  appFullName: footerObject,
  linksTitle: footerObject,
  linksNames: PropTypes.array,
  newsLetterTitle: footerObject,
  newsLetterText: footerObject,
  allRights: footerObject
};

export default Footer;
