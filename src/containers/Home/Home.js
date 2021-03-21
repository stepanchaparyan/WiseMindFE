import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getHomeTexts } from '../../redux/actions/homeTextsActions';
import Loading from '../../components/Loading/Loading';
import Welcome from './Welcome/Welcome';
import CoreValues from './CoreValues/CoreValues';
import Treatments from './Treatments/Treatments';
import Employees from './Employees/Employees';

const Home = ({ language }) => {
  const dispatch = useDispatch();
  const { homeTexts, loading, error } = useSelector(state => state.homeTexts);
  const welcomeTexts = homeTexts.filter(item => item.section === 'welcome');
  const shortText = welcomeTexts.find(text => text.title === 'shortText');
  const WiseMindFullName = welcomeTexts.find(text => text.title === 'WiseMindFullName');
  const longText = welcomeTexts.find(text => text.title === 'longText');
  const readMoreText = homeTexts.find(item => item.title === 'readMore');
  const treatments = homeTexts.filter(item => item.section === 'treatment');
  const coreValueMain = homeTexts.find(item => item.section === 'coreValuesMain');
  const coreValues = homeTexts.filter(item => item.parent_section === 'coreValues');
  const whoWeAre = homeTexts.find(item => item.section === 'whoWeAre');
  const employees = homeTexts
    .filter(item => item.section === 'employees')
    .sort((a, b) => a.number.localeCompare(b.number));
  const employeesTitleText = homeTexts.find(item => item.section === 'employeesTitleText');

  useEffect(() => {
    dispatch(getHomeTexts(language.toLowerCase()));
  }, [dispatch, language]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Welcome
            shortText={shortText}
            WiseMindFullName={WiseMindFullName}
            longText={longText}
          ></Welcome>
          <CoreValues
            coreValueMain={coreValueMain}
            coreValues={coreValues}
            whoWeAre={whoWeAre}
            readMoreText={readMoreText}
          ></CoreValues>
          <Treatments treatments={treatments} readMoreText={readMoreText}></Treatments>
          <Employees titleText={employeesTitleText} employees={employees}></Employees>
        </>
      )}
    </>
  );
};

Home.propTypes = {
  language: PropTypes.string.isRequired
};

export default Home;
