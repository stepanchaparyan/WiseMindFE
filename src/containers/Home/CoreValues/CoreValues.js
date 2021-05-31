import React, { useState } from 'react';
import PropTypes from 'prop-types';
import customObject from '../../../util/propTypes';
import {
  CoreValesContainer,
  LeftPart,
  RightPart,
  ButtonStyled,
  Title,
  ThreePictures,
  WhoWeAre,
  Container,
  Image,
  TitleText,
  MainText,
  WhoWeAreTitleText,
  WhoWeAreMainText,
  Overlay,
  WhoWeAreButton
} from './CoreValuesStyled';
import { BLANK } from '../../../constants';

const CoreValues = ({
  coreValueMainText,
  coreValuesTexts,
  whoWeAreText,
  readMoreText,
  readLessText,
  coreValuesMainImage,
  coreValuesImages,
  sentRequest,
  whoWeAreButton
}) => {
  const [isLongText, setLongText] = useState(false);
  const textLength = 473;
  const buttonText = isLongText ? readLessText : readMoreText;
  const mainText = coreValueMainText?.content || '';
  const finalText = isLongText ? mainText : `${mainText?.slice(0, 472)}...`;

  const image_url = coreValuesMainImage?.image_url;
  const alt = 'core values';

  return (
    <CoreValesContainer>
      <LeftPart src={image_url}>
        <Title>{coreValueMainText?.title}</Title>
        <div>
          {finalText}
          {coreValueMainText?.content?.length > textLength && (
            <ButtonStyled onClick={() => setLongText(!isLongText)}>{buttonText}</ButtonStyled>
          )}
        </div>
      </LeftPart>
      <RightPart>
        <ThreePictures>
          {coreValuesTexts?.map((text, i) => (
            <Container key={text?.title}>
              <Overlay>
                {coreValuesImages?.length > 2 && (
                  <Image src={coreValuesImages[i]?.image_url} alt={`${alt}_${i}`}></Image>
                )}
              </Overlay>
              <TitleText>{text?.title}</TitleText>
              <MainText>{text?.content}</MainText>
            </Container>
          ))}
        </ThreePictures>
        <WhoWeAre>
          <WhoWeAreTitleText>{whoWeAreText?.title}</WhoWeAreTitleText>
          <WhoWeAreMainText>{whoWeAreText?.content}</WhoWeAreMainText>
          <WhoWeAreButton target={BLANK} href={sentRequest?.h_link}>
            {whoWeAreButton?.content}
          </WhoWeAreButton>
        </WhoWeAre>
      </RightPart>
    </CoreValesContainer>
  );
};

CoreValues.propTypes = {
  coreValueMainText: customObject,
  coreValuesTexts: PropTypes.arrayOf(customObject).isRequired,
  whoWeAreText: customObject,
  readMoreText: PropTypes.string,
  readLessText: PropTypes.string,
  coreValuesImages: PropTypes.array,
  coreValuesMainImage: customObject,
  whoWeAreButton: customObject,
  sentRequest: customObject
};

export default CoreValues;
