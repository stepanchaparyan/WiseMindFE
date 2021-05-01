import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHomeTexts } from '../../redux/actions/homeTextsActions';
import { getHomeImages } from '../../redux/actions/homeImagesActions';
import Loading from '../../components/Loading/Loading';
import Welcome from './Welcome/Welcome';
import CoreValues from './CoreValues/CoreValues';
import Treatments from './Treatments/Treatments';
import Employees from './Employees/Employees';
import CustomModal from '../../components/Modal/Modal';
import { welcomeTextsSelector } from '../../redux/selectors/homeTextsSelector';

const Home = ({ language, welcomeTexts }) => {
  const dispatch = useDispatch();
  const { homeTexts, loading, error } = useSelector(state => state.homeTexts);
  // const welcomeTexts = homeTexts?.filter(item => item.section === 'welcome');
  const shortText = welcomeTexts?.find(text => text.title === 'shortText');
  const appFullName = welcomeTexts?.find(text => text.title === 'appFullName');
  const longText = welcomeTexts?.find(text => text.title === 'longText');
  const readMoreText = homeTexts?.find(item => item.title === 'readMore');
  const readLessText = homeTexts?.find(item => item.title === 'readLess');
  const coreValueMainText = homeTexts?.find(item => item.section === 'coreValuesMain');
  const treatments = homeTexts
    ?.filter(item => item.parent_section === 'treatment')
    .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0));
  const coreValuesTexts = homeTexts
    ?.filter(item => item.parent_section === 'coreValues')
    .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0));
  const whoWeAreText = homeTexts?.find(item => item.section === 'whoWeAre');
  const employeesTexts = homeTexts
    ?.filter(item => item.parent_section === 'all_employee')
    .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0));
  const employeesTitleText = homeTexts?.find(item => item.section === 'employeesTitleText');
  const aboutUsText = homeTexts?.find(item => item.section === 'aboutMeButton');
  const contactUsText = homeTexts?.find(item => item.section === 'contactUsButton');

  const { homeImages } = useSelector(state => state.homeImages);
  const welcomeImages = homeImages?.filter(item => item.parent_section === 'welcome');
  const coreValuesMainImage = homeImages?.find(item => item.parent_section === 'coreValuesMain');
  const coreValuesImages = homeImages
    ?.filter(item => item.parent_section === 'coreValues')
    .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0));
  const employeesImages = homeImages
    ?.filter(item => item.parent_section === 'all_employee')
    .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0));

  const { navbar } = useSelector(state => state.navbar);
  const sentRequest = navbar?.find(item => item.num === 0);

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
            aboutUsText={aboutUsText}
            contactUsText={contactUsText}
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
              aboutUsText={aboutUsText}
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
  welcomeTexts: PropTypes.any // todo
};

const mapStateToProps = state => {
  return {
    welcomeTexts: welcomeTextsSelector(state)
    // navbarMenus: navbarMenusSelector(state),
    // loading: loadingSelector(state)
  };
};

export default connect(mapStateToProps)(Home);
