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
  const [languageLabel, setLanguageLabel] = useState(
    localStorage.getItem('languageLabel') || 'English'
  );

  localStorage.setItem('language', language);
  localStorage.setItem('languageLabel', languageLabel);

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <title>Astutecarepathways</title>
          <link rel="shortcut icon" href="favicon.ico"></link>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Astute page, Doctors, medical" />
          <meta name="keywords" content="HTML, CSS, JavaScript, medical, doctors, LA" />
          <meta name="author" content="Astute team" />
        </Helmet>
        <Router>
          <>
            <Navbar
              language={language}
              setLanguage={setLanguage}
              languageLabel={languageLabel}
              setLanguageLabel={setLanguageLabel}
            />
            <Routes language={language} />
            <FooterContainer language={language} />
          </>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
