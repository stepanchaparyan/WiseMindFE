import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import Navbar from './containers/Navbar/Navbar';
import FooterContainer from './containers/Footer/FooterContainer';
import Routes from './Routes';
import theme from '../src/styles/theme';

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'EN');
  localStorage.setItem('language', language);

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <title>Astutecarepathways</title>
          <link rel="shortcut icon" href="favicon.ico"></link>
        </Helmet>
        <Router>
          <>
            <Navbar language={language} setLanguage={setLanguage} />
            <Routes language={language} />
            <FooterContainer language={language} />
          </>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
