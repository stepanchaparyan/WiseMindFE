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
import { LINK, BASE_URL } from '../../../constants';
import Core_Values_1 from '../../../assets/core_values_1.jpg';
import Core_Values_2 from '../../../assets/core_values_2.jpg';
import Core_Values_3 from '../../../assets/core_values_3.jpg';

const { navGreen, lightBlack, white } = theme;

const CoreValues = ({
  coreValueMain,
  coreValues,
  whoWeAre,
  readMoreText,
  readLessText,
  coreValuesImages
}) => {
  const imgList = [Core_Values_1, Core_Values_2, Core_Values_3]; // TODO will be removed
  const alt = 'image';

  const [isLongText, setLongText] = useState(false);

  const buttonText = isLongText ? readLessText : readMoreText;
  const mainText = coreValueMain?.content;
  const finalText = isLongText ? mainText : `${mainText?.slice(0, 473)} ...`;

  const { image_url } =
    coreValuesImages.length && coreValuesImages.find(item => item.section === 'coreValuesMain');
  const leftBG = `${BASE_URL}${image_url}`;

  return (
    <CoreValesContainer>
      <LeftPart src={leftBG}>
        <Title>{coreValueMain?.title}</Title>
        <div>{finalText}</div>
        <ButtonStyled onClick={() => setLongText(!isLongText)}>{buttonText}</ButtonStyled>
      </LeftPart>
      <RightPart>
        <ThreePictures>
          {coreValues.map((text, i) => (
            <Container key={text?.title}>
              <Overlay>
                <Image src={imgList[i]} alt={alt}></Image>
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
  coreValuesImages: PropTypes.array
};

export default CoreValues;
