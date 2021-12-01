import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import customObject from '../../../util/propTypes';
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
  IconContainer,
  LinkStyled
} from './EmployeesStyled';

const facebook = 'facebook';
const twitter = 'twitter';
const instagram = 'instagram';

const Employees = ({ titleText, employeesTexts, employeesImages }) => {
  const alt = 'astute employees';
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

  const employeeList = [];
  for (let i = 0; i < employeesTexts.length; i++) {
    employeeList.push({ ...employeesTexts[i], ...employeesImages[i] });
  }

  const OverlayMedia = (employeeImage, i) => (
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
      <Image src={employeeImage?.image_url} alt={`${alt}_${i}`}></Image>
    </Overlay>
  );

  return (
    <EmployeesContainer>
      <TitleText>{titleText?.content}</TitleText>
      {employeeList?.length < 4 ? (
        <Employee>
          {employeeList?.map((employee, i) => (
            <Container key={employee?.title}>
              {OverlayMedia(employeeList[i], i)}
              {employee?.content.startsWith('https') ? (
                <>
                  <LinkStyled href={employee.content} target="_blank" rel="noreferrer">
                    {employee?.title}
                  </LinkStyled>
                  <MainText></MainText>
                </>
              ) : (
                <>
                  <NameText>{employee?.title}</NameText>
                  <MainText>{employee?.content}</MainText>
                </>
              )}
            </Container>
          ))}
        </Employee>
      ) : (
        <Employee>
          <CarouselStyled itemsToShow={itemsToShow} itemPadding={[0, 20]}>
            {employeeList?.map(text => (
              <Container key={text?.title}>
                {OverlayMedia(text)}
                <NameText>{text?.title}</NameText>
                <MainText>{text?.content}</MainText>
              </Container>
            ))}
          </CarouselStyled>
        </Employee>
      )}
    </EmployeesContainer>
  );
};

Employees.propTypes = {
  employeesTexts: PropTypes.arrayOf(customObject).isRequired,
  employeesImages: PropTypes.arrayOf(customObject).isRequired,
  titleText: customObject
};

export default Employees;
