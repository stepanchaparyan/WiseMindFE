import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './containers/Navbar/Navbar';
import FooterContainer from './containers/Footer/FooterContainer';
import Routes from './Routes';
import theme from '../src/styles/theme';

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'US');
  localStorage.setItem('language', language);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <Navbar language={language} setLanguage={setLanguage} />
          <Routes language={language} />
          <FooterContainer language={language} />
        </>
      </Router>
    </ThemeProvider>
  );
};

export default App;
