import React, { useState } from 'react';
import PropTypes from 'prop-types';
import customObject from '../../../util/propTypes';
import {
  TreatmentsContainer,
  Container,
  ButtonStyled,
  ThreePictures,
  TitleText,
  MainText
} from './TreatmentsStyled';

const Treatments = ({ treatments, readMoreText, readLessText }) => {
  const oneTreatment = treatment => {
    const text = treatment?.content;
    const textMaxLength = 120;
    const [isLongText, setLongText] = useState(text > textMaxLength);
    const buttonText = isLongText ? readLessText : readMoreText;
    const updatedText = isLongText ? text : `${text?.slice(0, textMaxLength)}`;

    return (
      <ThreePictures key={treatment?.title}>
        <Container color={treatment.background}>
          <TitleText>{treatment?.title}</TitleText>
          <MainText>
            {updatedText}
            {treatment?.content?.length > textMaxLength && (
              <>
                {!isLongText && <span>...</span>}
                <ButtonStyled onClick={() => setLongText(!isLongText)}>{buttonText}</ButtonStyled>
              </>
            )}
          </MainText>
        </Container>
      </ThreePictures>
    );
  };

  return (
    <TreatmentsContainer>
      {treatments?.map((treatment, i) => i < 3 && oneTreatment(treatment, i))}
    </TreatmentsContainer>
  );
};

Treatments.propTypes = {
  treatments: PropTypes.arrayOf(customObject).isRequired,
  readMoreText: PropTypes.string,
  readLessText: PropTypes.string
};

export default Treatments;
