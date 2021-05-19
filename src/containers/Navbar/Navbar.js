import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { connect, useDispatch } from 'react-redux';
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
  customStyles
} from './NavbarStyled';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import { LINK, BLANK } from '../../constants';
import { getNavbar } from '../../redux/actions/navbarActions';
import { useOnClickOutside } from '../../hooks/clickOutSide';
import Loading from '../../components/Loading/Loading';
import {
  navbarMenusSelector,
  sentRequestSelector,
  loadingSelector
} from '../../redux/selectors/navbarSelector';
import { languagesList } from './LanguagesList';

const logoAlt = 'logoAlt';
const hamburgerAlt = 'hamburgerAlt';

const Navbar = ({
  language,
  setLanguage,
  languageLabel,
  setLanguageLabel,
  sentRequest,
  navbarMenus,
  loading
}) => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const dispatch = useDispatch();

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

  const changeHandler = value => {
    setLanguage(value.value);
    setLanguageLabel(value.label);
  };

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
                      <StyledLink exact key={title} onClick={() => setOpen(false)} to={h_link}>
                        {title.toUpperCase()}
                      </StyledLink>
                    ))}
                  </NavLinks>
                </NavLinkContainer>
              )}
              <Select
                options={languagesList}
                styles={customStyles}
                onChange={changeHandler}
                placeholder={languageLabel}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
              />
              <RightContainer open={open}>
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
  setLanguage: PropTypes.func.isRequired,
  sentRequest: PropTypes.object, //todo
  navbarMenus: PropTypes.array, // todo
  loading: PropTypes.bool, //todo
  languageLabel: PropTypes.string.isRequired,
  setLanguageLabel: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    sentRequest: sentRequestSelector(state),
    navbarMenus: navbarMenusSelector(state),
    loading: loadingSelector(state)
  };
};

export default connect(mapStateToProps)(Navbar);
