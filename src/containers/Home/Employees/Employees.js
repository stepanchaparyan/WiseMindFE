import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMedia from 'use-media';
import { BLANK, FACEBOOK_LINK, TWITTER_LINK, INSTAGRAM_LINK } from '../../../constants/url';
import {
  EmployeesContainer,
  Container,
  Employee,
  TitleText,
  NameText,
  MainText,
  Overlay,
  Image,
  CarouselStyled,
  Media,
  MediaIcon,
  IconContainer
} from './EmployeesStyled';
import img from '../../../assets/photo.webp';

const facebook = 'facebook';
const twitter = 'twitter';
const instagram = 'instagram';

const Employees = ({ titleText, employees }) => {
  const alt = 'image';
  const [itemsToShow, setItemsToShow] = useState(3);
  const isMobile = useMedia({ maxWidth: 768 });
  const isTablet = useMedia({ maxWidth: 1024 });
  const isDesktop = useMedia({ minWidth: 1024 });

  useEffect(() => {
    if (isDesktop) {
      setItemsToShow(3);
    }
    if (isTablet) {
      setItemsToShow(2);
    }
    if (isMobile) {
      setItemsToShow(1);
    }
  }, [isMobile, isTablet, isDesktop]);

  const OverlayMedia = () => (
    <Overlay>
      <Media>
        <IconContainer type={facebook} target={BLANK} href={FACEBOOK_LINK}>
          <MediaIcon type={facebook}></MediaIcon>
        </IconContainer>
        <IconContainer type={twitter} target={BLANK} href={TWITTER_LINK}>
          <MediaIcon type={twitter}></MediaIcon>
        </IconContainer>
        <IconContainer type={instagram} target={BLANK} href={INSTAGRAM_LINK}>
          <MediaIcon type={instagram}></MediaIcon>
        </IconContainer>
      </Media>
      <Image src={img} alt={alt}></Image>
    </Overlay>
  );

  return (
    <EmployeesContainer>
      <TitleText>{titleText?.text}</TitleText>
      {employees.length < 4 ? (
        <Employee>
          {employees.map(text => (
            <Container key={text?.title}>
              {OverlayMedia()}
              <NameText>{text?.title}</NameText>
              <MainText>{text?.text}</MainText>
            </Container>
          ))}
        </Employee>
      ) : (
        <Employee>
          <CarouselStyled itemsToShow={itemsToShow} itemPadding={[0, 20]}>
            {employees.map(text => (
              <Container key={text?.title}>
                {OverlayMedia()}
                <NameText>{text?.title}</NameText>
                <MainText>{text?.text}</MainText>
              </Container>
            ))}
          </CarouselStyled>
        </Employee>
      )}
    </EmployeesContainer>
  );
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      section: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })
  ),
  titleText: PropTypes.shape({
    text: PropTypes.string,
    section: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default Employees;
