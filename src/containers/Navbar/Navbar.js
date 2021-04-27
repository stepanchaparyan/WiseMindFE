import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  LogoContainer,
  Logo,
  NavLinks,
  StyledLink,
  SendRequestButton,
  NavLinkContainer,
  RightContainer,
  PaperPlaneIcon,
  Hamburger,
  ReactFlagsSelectStyled
} from './NavbarStyled';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import { LINK } from '../../constants';
import { BLANK } from '../../constants/url';
import { getNavbar } from '../../redux/actions/navbarActions';
import { useOnClickOutside } from '../../hooks/clickOutSide';
import { languageTransformer } from '../../util/languageTransformer';
import { showLanguageSelector } from '../../../environment';
import Loading from '../../components/Loading/Loading';

const logoAlt = 'logoAlt';
const hamburgerAlt = 'hamburgerAlt';

const Navbar = ({ language, setLanguage }) => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const dispatch = useDispatch();
  const { navbar, loading } = useSelector(state => state.navbar);
  const sentRequest = navbar?.find(item => item.num === 0);
  const navbarMenus = navbar
    ?.filter(item => item.num !== 0)
    .sort((a, b) => (a.num < b.num ? -1 : a.num > b.num ? 1 : 0));

  useEffect(() => {
    dispatch(getNavbar(language.toLowerCase()));
  }, [dispatch, language]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 20) {
      setVisible(currentScrollPos > 10);
    }
  };

  const toggle = () => {
    setOpen(!open);
  };

  const languagesList = ['en', 'es', 'de', 'fr', 'ru', 'hy']; // will delete later

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {!loading && (
            <Container ref={node} visible={visible}>
              <LogoContainer to={LINK.TO.HOME}>
                <Logo src={logo} alt={logoAlt} />
              </LogoContainer>
              {navbarMenus && (
                <NavLinkContainer open={open}>
                  <NavLinks>
                    {navbarMenus.map(({ title, h_link }) => (
                      <StyledLink exact key={title} to={h_link}>
                        {title.toUpperCase()}
                      </StyledLink>
                    ))}
                  </NavLinks>
                </NavLinkContainer>
              )}
              <RightContainer open={open}>
                {showLanguageSelector && (
                  <ReactFlagsSelectStyled
                    countries={languageTransformer(languagesList)}
                    customLabels={{
                      US: 'English',
                      ES: 'Español',
                      FR: 'Français',
                      DE: 'Deutsch',
                      RU: 'Русский',
                      AM: 'Հայերեն'
                    }}
                    selected={language}
                    onSelect={code => setLanguage(code)}
                    selectedSize={14}
                    optionsSize={13}
                    placeholder={'English'}
                  />
                )}
                <SendRequestButton target={BLANK} href={sentRequest?.h_link}>
                  {sentRequest?.title}
                  <PaperPlaneIcon />
                </SendRequestButton>
              </RightContainer>
              <Hamburger src={hamburger} alt={hamburgerAlt} onClick={toggle}></Hamburger>
            </Container>
          )}
        </>
      )}
    </>
  );
};

Navbar.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired
};

export default Navbar;
