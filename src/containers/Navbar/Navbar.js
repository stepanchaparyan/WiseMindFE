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

const alt = 'logo';

const Navbar = ({ language, setLanguage }) => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const dispatch = useDispatch();
  const { navbar, loading } = useSelector(state => state.navbar);
  const sentRequest = navbar.find(item => item.section === 'sendRequest');
  const navbarMenus = navbar
    .filter(item => item.section === 'navbar')
    .sort((a, b) => a.number.localeCompare(b.number));

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
      {!loading && (
        <Container ref={node} visible={visible}>
          <LogoContainer to={LINK.TO.HOME}>
            <Logo src={logo} alt={alt} />
          </LogoContainer>
          <NavLinkContainer open={open}>
            <NavLinks>
              {navbarMenus.map(({ title, link }) => (
                <StyledLink exact key={title} to={link}>
                  {title.toUpperCase()}
                </StyledLink>
              ))}
            </NavLinks>
          </NavLinkContainer>
          <RightContainer open={open}>
            <ReactFlagsSelectStyled
              countries={languageTransformer(languagesList)}
              customLabels={{
                US: 'English',
                FR: 'French',
                DE: 'Germany',
                RU: 'Russian',
                AM: 'Armenian',
                ES: 'Spanish'
              }}
              selected={language}
              onSelect={code => setLanguage(code)}
              selectedSize={14}
              placeholder={'English'}
            />
            <SendRequestButton target={BLANK} href={sentRequest?.link}>
              {sentRequest?.title}
              <PaperPlaneIcon />
            </SendRequestButton>
          </RightContainer>
          <Hamburger src={hamburger} onClick={toggle}></Hamburger>
        </Container>
      )}
    </>
  );
};

Navbar.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired
};

export default Navbar;
