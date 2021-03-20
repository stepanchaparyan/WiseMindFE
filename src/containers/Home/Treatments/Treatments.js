import React from 'react';
import PropTypes from 'prop-types';
import customObject from '../../../util/propTypes';
import {
  TreatmentsContainer,
  Container,
  ButtonStyled,
  ThreePictures,
  TitleText,
  MainText,
  Image
} from './TreatmentsStyled';
import img1 from '../../../assets/map-3-64.png';
import img2 from '../../../assets/brain-64.png';
import img3 from '../../../assets/puzzle-4-64.png';

const Treatments = ({ treatments }) => {
  const imgList = [img1, img2, img3]; // TODO will be removed
  const colors = ['white', 'lightBlue', 'lightGray']; // TODO will be removed
  const alt = 'image';

  return (
    <TreatmentsContainer>
      <ThreePictures>
        {treatments.map((text, i) => (
          <Container key={text?.title} color={colors[i]}>
            <Image src={imgList[i]} alt={alt}></Image>
            <TitleText>{text?.title}</TitleText>
            <MainText>{text?.text}</MainText>
            <ButtonStyled>Read More</ButtonStyled>
          </Container>
        ))}
      </ThreePictures>
    </TreatmentsContainer>
  );
};

Treatments.propTypes = {
  treatments: PropTypes.arrayOf(customObject).isRequired
};

export default Treatments;
