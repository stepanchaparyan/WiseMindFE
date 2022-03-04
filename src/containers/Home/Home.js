import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import customObject from '../../util/propTypes';
import { getHomeTexts } from '../../redux/actions/homeTextsActions';
import { getHomeImages } from '../../redux/actions/homeImagesActions';
import Loading from '../../components/Loading/Loading';
import Welcome from './Welcome/Welcome';
import CoreValues from './CoreValues/CoreValues';
import Treatments from './Treatments/Treatments';
import Employees from './Employees/Employees';
import CustomModal from '../../components/Modal/Modal';
import {
  loadingSelector,
  errorSelector,
  welcomeTextsSelector,
  shortTextSelector,
  appFullNameSelector,
  longTextSelector,
  readMoreTextSelector,
  readLessTextsSelector,
  coreValueMainTextSelector,
  treatmentsSelector,
  coreValuesTextsSelector,
  whoWeAreTextSelector,
  employeesTextsSelector,
  employeesTitleTextSelector,
  whoWeAreButtonTextSelector
} from '../../redux/selectors/homeTextsSelector';
import {
  welcomeImagesSelector,
  coreValuesMainImageSelector,
  coreValuesImagesSelector,
  employeesImagesSelector
} from '../../redux/selectors/homeImagesSelector';
import { sentRequestSelector } from '../../redux/selectors/navbarSelector';
import { IFrameContainer } from './HomeStyled';

const Home = ({
  language,
  loading,
  error,
  longText,
  appFullName,
  shortText,
  readMoreText,
  readLessText,
  coreValueMainText,
  treatments,
  coreValuesTexts,
  whoWeAreText,
  employeesTexts,
  employeesTitleText,
  whoWeAreButton,
  welcomeImages,
  coreValuesMainImage,
  coreValuesImages,
  employeesImages,
  sentRequest
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeTexts(language.toLowerCase()));
    dispatch(getHomeImages());
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
          <Welcome
            shortText={shortText}
            appFullName={appFullName}
            longText={longText}
            welcomeImages={welcomeImages}
            sentRequest={sentRequest}
          ></Welcome>
          {coreValuesTexts && (
            <CoreValues
              coreValueMainText={coreValueMainText}
              coreValuesTexts={coreValuesTexts}
              whoWeAreText={whoWeAreText}
              readMoreText={readMoreText?.content}
              readLessText={readLessText?.content}
              coreValuesMainImage={coreValuesMainImage}
              coreValuesImages={coreValuesImages}
              sentRequest={sentRequest}
              whoWeAreButton={whoWeAreButton}
            ></CoreValues>
          )}
          {treatments && (
            <Treatments
              treatments={treatments}
              readMoreText={readMoreText?.content}
              readLessText={readLessText?.content}
            ></Treatments>
          )}
          {employeesImages && (
            <Employees
              titleText={employeesTitleText}
              employeesImages={employeesImages}
              employeesTexts={employeesTexts}
            ></Employees>
          )}
          <IFrameContainer>
            <iframe
              src="https://player.vimeo.com/video/674212067"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen=""
            ></iframe>
          </IFrameContainer>
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

Home.propTypes = {
  language: PropTypes.string.isRequired,
  welcomeTexts: PropTypes.arrayOf(customObject),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  shortText: customObject,
  longText: customObject,
  appFullName: customObject,
  readMoreText: customObject,
  readLessText: customObject,
  coreValueMainText: customObject,
  treatments: PropTypes.any,
  coreValuesTexts: PropTypes.arrayOf(customObject),
  whoWeAreText: customObject,
  employeesTexts: PropTypes.arrayOf(customObject),
  employeesTitleText: customObject,
  whoWeAreButton: customObject,
  welcomeImages: PropTypes.arrayOf(customObject),
  coreValuesMainImage: customObject,
  coreValuesImages: PropTypes.arrayOf(customObject),
  employeesImages: PropTypes.arrayOf(customObject),
  sentRequest: customObject
};

Home.defaultProps = {
  error: null
};

const mapStateToProps = state => {
  return {
    sentRequest: sentRequestSelector(state),
    loading: loadingSelector(state),
    error: errorSelector(state),
    welcomeTexts: welcomeTextsSelector(state),
    shortText: shortTextSelector(state),
    appFullName: appFullNameSelector(state),
    longText: longTextSelector(state),
    readMoreText: readMoreTextSelector(state),
    readLessText: readLessTextsSelector(state),
    coreValueMainText: coreValueMainTextSelector(state),
    treatments: treatmentsSelector(state),
    coreValuesTexts: coreValuesTextsSelector(state),
    whoWeAreText: whoWeAreTextSelector(state),
    employeesTexts: employeesTextsSelector(state),
    employeesTitleText: employeesTitleTextSelector(state),
    whoWeAreButton: whoWeAreButtonTextSelector(state),
    welcomeImages: welcomeImagesSelector(state),
    coreValuesMainImage: coreValuesMainImageSelector(state),
    coreValuesImages: coreValuesImagesSelector(state),
    employeesImages: employeesImagesSelector(state)
  };
};

export default connect(mapStateToProps)(Home);
