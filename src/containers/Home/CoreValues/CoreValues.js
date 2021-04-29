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
  Overlay
} from './CoreValuesStyled';
import Button from '../../../components/Button/Button';
import theme from '../../../styles/theme';
import { LINK } from '../../../constants';

const { navGreen, lightBlack, white } = theme;

const CoreValues = ({
  coreValueMainText,
  coreValuesTexts,
  whoWeAreText,
  readMoreText,
  readLessText,
  coreValuesMainImage,
  coreValuesImages
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
          <Button
            text="About Us"
            textcolor={white}
            texthovercolor={white}
            backgroundcolor={navGreen}
            backgroundhovercolor={lightBlack}
            to={LINK.TO.ABOUT}
          />
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
  coreValuesMainImage: PropTypes.object
};

export default CoreValues;
