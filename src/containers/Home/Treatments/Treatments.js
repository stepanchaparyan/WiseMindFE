import React, { useState } from 'react';
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

const Treatments = ({ treatments, readMoreText, readLessText }) => {
  const imgList = [img1, img2, img3]; // TODO will be removed
  const alt = 'image';

  const oneTreatment = (treatment, i) => {
    const textLength = 110;
    const [isLongText, setLongText] = useState(false);
    const buttonText = isLongText ? readLessText : readMoreText;
    const updatedText = text => (isLongText ? text : `${text?.slice(0, 110)}`);

    return (
      <ThreePictures key={treatment?.title}>
        <Container color={treatment.background}>
          <Image src={imgList[i]} alt={alt}></Image>
          <TitleText>{treatment?.title}</TitleText>
          <MainText>{updatedText(treatment?.content)}</MainText>
          {treatment?.content?.length > textLength && (
            <ButtonStyled onClick={() => setLongText(!isLongText)}>{buttonText}</ButtonStyled>
          )}
        </Container>
      </ThreePictures>
    );
  };

  return (
    <TreatmentsContainer>
      {treatments.map((treatment, i) => i < 3 && oneTreatment(treatment, i))}
    </TreatmentsContainer>
  );
};

Treatments.propTypes = {
  treatments: PropTypes.arrayOf(customObject).isRequired,
  readMoreText: PropTypes.string,
  readLessText: PropTypes.string
};

export default Treatments;
