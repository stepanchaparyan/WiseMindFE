import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import customObject from '../../util/propTypes';
import { getNewsLettersImages, getNewsLettersTexts } from '../../redux/actions/newsLettersActions';
import Loading from '../../components/Loading/Loading';
import {
  imagesLoadingSelector,
  imagesErrorSelector,
  newsImagesSelector,
  newsTextsSelector
} from '../../redux/selectors/newsLettersSelector';
import { Container, TitleContainer, Title, NewsContainer, News } from './NewsLetterStyled';
import CustomModal from '../../components/Modal/Modal';

const newsLetter = 'newsLetter';

const NewsLetter = ({ newsLettersImages, newsLettersTexts, loading, error, language }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsLettersImages());
    dispatch(getNewsLettersTexts(language.toLowerCase()));
  }, [dispatch, language]);

  const [modalIsOpen, setCloseModal] = useState(!error);
  const handleCloseErrorModal = () => {
    setCloseModal(false);
  };

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : !error ? (
        <>
          {newsLettersImages.length > 0 && (
            <Container>
              <TitleContainer>
                <Title>{newsLettersTexts[0]?.title}</Title>
              </TitleContainer>
              <NewsContainer>
                {newsLettersImages?.map(image => (
                  <News src={image.image_url} key={image.image_url} alt={newsLetter}></News>
                ))}
              </NewsContainer>
            </Container>
          )}
        </>
      ) : (
        <CustomModal
          modalIsOpen={modalIsOpen}
          onConfirm={handleCloseErrorModal}
          title="Error"
          text="Something went wrong, please try later"
          buttonConfirmText="OK"
          titleBgColor="gray"
          isBigSize
          shouldShowFooter
        ></CustomModal>
      )}
    </>
  );
};

NewsLetter.propTypes = {
  newsLettersImages: PropTypes.arrayOf(customObject),
  newsLettersTexts: PropTypes.arrayOf(customObject),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  language: PropTypes.string.isRequired
};

NewsLetter.defaultProps = {
  error: null
};

const mapStateToProps = state => {
  return {
    loading: imagesLoadingSelector(state),
    error: imagesErrorSelector(state),
    newsLettersImages: newsImagesSelector(state),
    newsLettersTexts: newsTextsSelector(state)
  };
};

export default connect(mapStateToProps)(NewsLetter);
