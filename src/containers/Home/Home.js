import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getHomeTexts } from '../../redux/actions/homeTextsActions';
import { getHomeImages } from '../../redux/actions/homeImagesActions';
import Loading from '../../components/Loading/Loading';
import Welcome from './Welcome/Welcome';
import CoreValues from './CoreValues/CoreValues';
import Treatments from './Treatments/Treatments';
import Employees from './Employees/Employees';

const Home = ({ language }) => {
  const dispatch = useDispatch();
  const { homeTexts, loading, error } = useSelector(state => state.homeTexts);
  const welcomeTexts = homeTexts?.filter(item => item.section === 'welcome');
  const shortText = welcomeTexts?.find(text => text.title === 'shortText');
  const appFullName = welcomeTexts?.find(text => text.title === 'appFullName');
  const longText = welcomeTexts?.find(text => text.title === 'longText');
  const readMoreText = homeTexts?.find(item => item.title === 'readMore');
  const readLessText = homeTexts?.find(item => item.title === 'readLess');
  const coreValueMain = homeTexts?.find(item => item.section === 'coreValuesMain');
  const treatments = homeTexts
    ?.filter(item => item.section === 'treatment')
    .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0));
  const coreValues = homeTexts
    ?.filter(item => item.parent_section === 'coreValues')
    .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0));
  const whoWeAre = homeTexts?.find(item => item.section === 'whoWeAre');
  const employees = homeTexts
    ?.filter(item => item.parent_section === 'all_employee')
    .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0));
  const employeesTitleText = homeTexts?.find(item => item.section === 'employeesTitleText');

  const { homeImages } = useSelector(state => state.homeImages);
  const welcomeImages = homeImages?.filter(item => item.parent_section === 'welcome');
  const coreValuesMainImage = homeImages?.find(item => item.parent_section === 'coreValuesMain');
  const coreValuesImages = homeImages
    ?.filter(item => item.parent_section === 'coreValues')
    .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0));

  useEffect(() => {
    dispatch(getHomeTexts(language.toLowerCase()));
    dispatch(getHomeImages());
  }, [dispatch, language]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Welcome
            shortText={shortText}
            appFullName={appFullName}
            longText={longText}
            welcomeImages={welcomeImages}
          ></Welcome>
          {coreValueMain && (
            <CoreValues
              coreValueMain={coreValueMain}
              coreValues={coreValues}
              whoWeAre={whoWeAre}
              readMoreText={readMoreText?.content}
              readLessText={readLessText?.content}
              coreValuesMainImage={coreValuesMainImage}
              coreValuesImages={coreValuesImages}
            ></CoreValues>
          )}
          {treatments && (
            <Treatments treatments={treatments} readMoreText={readMoreText}></Treatments>
          )}
          {employees && (
            <Employees titleText={employeesTitleText} employees={employees}></Employees>
          )}
        </>
      )}
    </>
  );
};

Home.propTypes = {
  language: PropTypes.string.isRequired
};

export default Home;
