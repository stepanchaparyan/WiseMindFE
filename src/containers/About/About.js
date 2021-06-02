import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import customObject from '../../util/propTypes';
import { getAboutTexts } from '../../redux/actions/aboutTextsActions';
import Loading from '../../components/Loading/Loading';
import {
  loadingSelector,
  errorSelector,
  allTextsSelector
} from '../../redux/selectors/aboutTextsSelector';
import {
  Container,
  Context,
  MainText,
  MainText1,
  MainText2,
  MainText3,
  MainText4,
  TitleContainer,
  Title,
  LogoContainer,
  Logo,
  Triangle,
  Line
} from './AboutStyled';
import CustomModal from '../../components/Modal/Modal';
import logo from '../../assets/logo.png';
import { isMobileOrTablet } from '../../util/deviceType';

const logoAlt = 'logoAlt';

const About = ({ aboutTexts, loading, error, language }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutTexts(language.toLowerCase()));
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
          {aboutTexts.length > 0 && (
            <Container isMobileOrTablet={isMobileOrTablet}>
              <div>
                <TitleContainer>
                  <LogoContainer>
                    <Logo src={logo} alt={logoAlt}></Logo>
                  </LogoContainer>
                  <Title>{aboutTexts[0].title}</Title>
                </TitleContainer>
                {!isMobileOrTablet ? (
                  <Context>
                    <>
                      <MainText1>{aboutTexts[0].content}</MainText1>
                      <MainText2>{aboutTexts[1].content}</MainText2>
                      <MainText3>{aboutTexts[2].content}</MainText3>
                      <MainText4>{aboutTexts[3].content}</MainText4>
                    </>
                  </Context>
                ) : (
                  <Context>
                    {aboutTexts.map((text, i) => (
                      <MainText key={i}>{text?.content}</MainText>
                    ))}
                  </Context>
                )}
              </div>
              {!isMobileOrTablet && <Triangle />}
              {!isMobileOrTablet && <Line />}
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

About.propTypes = {
  language: PropTypes.string.isRequired,
  aboutTexts: PropTypes.arrayOf(customObject),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

About.defaultProps = {
  error: null
};

const mapStateToProps = state => {
  return {
    loading: loadingSelector(state),
    error: errorSelector(state),
    aboutTexts: allTextsSelector(state)
  };
};

export default connect(mapStateToProps)(About);
