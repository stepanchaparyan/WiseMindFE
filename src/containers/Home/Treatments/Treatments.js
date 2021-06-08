import React, { useState } from 'react';
import PropTypes from 'prop-types';
import customObject from '../../../util/propTypes';
import {
  TreatmentsContainer,
  Container,
  ButtonStyled,
  MoreLessButton,
  ThreePictures,
  TitleText,
  MainText
} from './TreatmentsStyled';

const Treatments = ({ treatments, readMoreText, readLessText }) => {
  const oneTreatment = (treatment, i) => {
    const text = treatment?.content;
    const textMaxLength = 263;
    const [isLongText, setLongText] = useState(text > textMaxLength);
    const buttonText = isLongText ? readLessText : readMoreText;
    const updatedText = isLongText ? text : `${text?.slice(0, textMaxLength)}`;

    return (
      <ThreePictures key={treatment?.title}>
        <Container color={treatment?.background}>
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

  const manyTreatments = treatments => {
    const [isShortText, setIsShortText] = useState(true);
    const buttonText = isShortText ? readMoreText : readLessText;

    return (
      <div>
        <Container
          isLiElements={treatments[0].section === 'Acculturation Stress'}
          isShortText={isShortText}
          color={treatments[0]?.background}
        >
          <TitleText>{treatments[0]?.section}</TitleText>
          {treatments.map(treatment => (
            <MainText key={treatment.title}>{treatment.content}</MainText>
          ))}
        </Container>
        <MoreLessButton
          color={treatments[0]?.background}
          onClick={() => setIsShortText(!isShortText)}
        >
          {buttonText}
        </MoreLessButton>
      </div>
    );
  };

  return (
    <TreatmentsContainer>
      {treatments?.map(treatment =>
        !treatment?.length ? oneTreatment(treatment) : manyTreatments(treatment)
      )}
    </TreatmentsContainer>
  );
};

Treatments.propTypes = {
  treatments: PropTypes.arrayOf(customObject).isRequired,
  readMoreText: PropTypes.string,
  readLessText: PropTypes.string
};

export default Treatments;
