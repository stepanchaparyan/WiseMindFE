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
  coreValueMain,
  coreValues,
  whoWeAre,
  readMoreText,
  readLessText,
  coreValuesMainImage,
  coreValuesImages
}) => {
  const [isLongText, setLongText] = useState(false);
  const textLength = 473;
  const buttonText = isLongText ? readLessText : readMoreText;
  const mainText = coreValueMain?.content;
  const finalText = isLongText ? mainText : `${mainText?.slice(0, 473)} ...`;

  const image_url = coreValuesMainImage?.image_url;
  const alt = 'image';

  return (
    <CoreValesContainer>
      <LeftPart src={image_url}>
        <Title>{coreValueMain?.title}</Title>
        <div>{finalText}</div>
        {coreValueMain?.content?.length > textLength && (
          <ButtonStyled onClick={() => setLongText(!isLongText)}>{buttonText}</ButtonStyled>
        )}
      </LeftPart>
      <RightPart>
        <ThreePictures>
          {coreValues.map((text, i) => (
            <Container key={text?.title}>
              <Overlay>
                <Image src={coreValuesImages[i]?.image_url} alt={alt}></Image>
              </Overlay>
              <TitleText>{text?.title}</TitleText>
              <MainText>{text?.content}</MainText>
            </Container>
          ))}
        </ThreePictures>
        <WhoWeAre>
          <WhoWeAreTitleText>{whoWeAre?.title}</WhoWeAreTitleText>
          <WhoWeAreMainText>{whoWeAre?.content}</WhoWeAreMainText>
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
  coreValueMain: customObject,
  coreValues: PropTypes.arrayOf(customObject).isRequired,
  whoWeAre: customObject,
  readMoreText: PropTypes.string,
  readLessText: PropTypes.string,
  coreValuesImages: PropTypes.array,
  coreValuesMainImage: PropTypes.object
};

export default CoreValues;
