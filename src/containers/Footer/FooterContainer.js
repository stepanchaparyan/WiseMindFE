import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFooter } from '../../redux/actions/footerActions';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Loading from '../../components/Loading/Loading';
import { MainContainer } from './ContactUs/ContactUsStyled';

const FooterContainer = ({ language }) => {
  const dispatch = useDispatch();
  const { footer, loading } = useSelector(state => state.footer);
  const contactUs = footer?.find(item => item.section === 'contactUs');
  const infoText = footer?.find(item => item.title === 'text');
  const makeRequest = footer?.find(item => item.title === 'makeRequest');
  const checkBoxText = footer?.find(item => item.title === 'checkBoxText');
  const appFullName = footer?.find(item => item.title === 'appFullName');
  const linksTitle = footer?.find(item => item.title === 'linksTitle');
  const linksNames = footer?.filter(item => item.title === 'names') || [];
  const linksAddresses = footer?.filter(item => item.title === 'addresses') || [];
  const address = footer?.find(item => item.title === 'Address: ');
  const phone = footer?.find(item => item.title === 'Phone: ');
  const email = footer?.find(item => item.title === 'Email: ');
  const newsLetter = footer?.find(item => item.title === 'NewsLetter');

  useEffect(() => {
    dispatch(getFooter(language.toLowerCase()));
  }, [dispatch, language]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <MainContainer>
          <ContactUs
            texts={contactUs}
            makeRequest={makeRequest}
            checkBoxText={checkBoxText}
          ></ContactUs>
          <Footer
            infoText={infoText}
            address={address}
            phone={phone}
            email={email}
            newsLetter={newsLetter}
            appFullName={appFullName}
            linksTitle={linksTitle}
            linksNames={linksNames}
            linksAddresses={linksAddresses}
          ></Footer>
          <ScrollToTop></ScrollToTop>
        </MainContainer>
      )}
    </>
  );
};

FooterContainer.propTypes = {
  language: PropTypes.string.isRequired
};

export default FooterContainer;
