import React from 'react';
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
import Core_Values_1 from '../../../assets/core_values_1.jpg';
import Core_Values_2 from '../../../assets/core_values_2.jpg';
import Core_Values_3 from '../../../assets/core_values_3.jpg';

const { navGreen, lightBlack, white } = theme;

const CoreValues = ({ coreValueMain, coreValues, whoWeAre }) => {
  const imgList = [Core_Values_1, Core_Values_2, Core_Values_3]; // TODO will be removed
  const alt = 'image';

  return (
    <CoreValesContainer>
      <LeftPart>
        <Title>{coreValueMain?.title}</Title>
        <div>{coreValueMain?.text}</div>
        <ButtonStyled>Read More</ButtonStyled>
      </LeftPart>
      <RightPart>
        <ThreePictures>
          {coreValues.map((text, i) => (
            <Container key={text?.title}>
              <Overlay>
                <Image src={imgList[i]} alt={alt}></Image>
              </Overlay>
              <TitleText>{text?.title}</TitleText>
              <MainText>{text?.text}</MainText>
            </Container>
          ))}
        </ThreePictures>
        <WhoWeAre>
          <WhoWeAreTitleText>{whoWeAre?.title}</WhoWeAreTitleText>
          <WhoWeAreMainText>{whoWeAre?.text}</WhoWeAreMainText>
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
  coreValues: customObject,
  whoWeAre: customObject
};

export default CoreValues;
