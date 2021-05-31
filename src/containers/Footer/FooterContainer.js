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

  const contactUsTitle = footer?.find(item => item.num === 1);
  const contactUsText = footer?.find(item => item.num === 2);
  const makeRequest = footer?.find(item => item.num === 3);
  const checkBoxText = footer?.find(item => item.num === 4);

  const infoText = footer?.find(item => item.num === 11);
  const addressText = footer?.find(item => item.num === 12);
  const address = footer?.find(item => item.num === 13);
  const emailText = footer?.find(item => item.num === 14);
  const email = footer?.find(item => item.num === 15);
  const phoneText = footer?.find(item => item.num === 16);
  const phone = footer?.find(item => item.num === 17);
  const appFullName = footer?.filter(item => item.num === 18);

  const linksTitle = footer?.find(item => item.num === 19);
  const linksNames = footer?.filter(item => item.num === 20);
  const newsLetterTitle = footer?.find(item => item.num === 21);
  const newsLetterText = footer?.find(item => item.num === 22);
  const allRights = footer?.find(item => item.num === 23);

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
            contactUsTitle={contactUsTitle}
            contactUsText={contactUsText}
            makeRequest={makeRequest}
            checkBoxText={checkBoxText}
          ></ContactUs>
          <Footer
            infoText={infoText}
            address={address}
            addressText={addressText}
            phone={phone}
            phoneText={phoneText}
            email={email}
            emailText={emailText}
            appFullName={appFullName}
            linksTitle={linksTitle}
            linksNames={linksNames}
            newsLetterTitle={newsLetterTitle}
            newsLetterText={newsLetterText}
            allRights={allRights}
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
