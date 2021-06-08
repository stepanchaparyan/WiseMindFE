import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import customObject from '../../util/propTypes';
import { getCareerTexts } from '../../redux/actions/careerTextsActions';
import Loading from '../../components/Loading/Loading';
import {
  loadingSelector,
  errorSelector,
  allTextsSelector
} from '../../redux/selectors/careerTextsSelector';
import {
  Container,
  Context,
  MainText,
  VerticalLine,
  Title,
  LogoContainer,
  Logo,
  TextsContainer
} from './CareerOpportunitiesStyled';
import CustomModal from '../../components/Modal/Modal';
import logo from '../../assets/logo.png';

const logoAlt = 'logoAlt';

const CareerOpportunities = ({ careerTexts, loading, error, language }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCareerTexts(language.toLowerCase()));
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
          {careerTexts.length > 0 && (
            <Container>
              <Context>
                <LogoContainer>
                  <Logo src={logo} alt={logoAlt}></Logo>
                </LogoContainer>
                <VerticalLine></VerticalLine>
                <TextsContainer>
                  <Title>{careerTexts[0].title}</Title>
                  <MainText>{careerTexts && careerTexts[0].content}</MainText>
                  <MainText>{careerTexts[1]?.content}</MainText>
                </TextsContainer>
              </Context>
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

CareerOpportunities.propTypes = {
  language: PropTypes.string.isRequired,
  careerTexts: PropTypes.arrayOf(customObject),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

CareerOpportunities.defaultProps = {
  error: null
};

const mapStateToProps = state => {
  return {
    loading: loadingSelector(state),
    error: errorSelector(state),
    careerTexts: allTextsSelector(state)
  };
};

export default connect(mapStateToProps)(CareerOpportunities);
