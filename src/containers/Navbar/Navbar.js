import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import navbarObject from '../../util/propTypes';
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
  customStyles,
  GlobeIcon,
  ReactTooltipStyled
} from './NavbarStyled';
import logo from '../../assets/logo.png';
import globe from '../../assets/globe.png';
import hamburger from '../../assets/hamburger.png';
import { LINK, BLANK } from '../../constants';
import { getNavbar } from '../../redux/actions/navbarActions';
import { getLanguagesList } from '../../redux/actions/languagesListAction';
import { useOnClickOutside } from '../../hooks/clickOutSide';
import Loading from '../../components/Loading/Loading';
import {
  navbarMenusSelector,
  sentRequestSelector,
  loadingSelector
} from '../../redux/selectors/navbarSelector';
import { languagesSelector } from '../../redux/selectors/languagesListSelector';

const logoAlt = 'logoAlt';
const hamburgerAlt = 'hamburgerAlt';

const Navbar = ({
  language,
  setLanguage,
  languageLabel,
  setLanguageLabel,
  sentRequest,
  navbarMenus,
  loading,
  languagesList
}) => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const node = useRef();

  const languagesUpdatedList = languagesList?.map(item => {
    return { value: item.key, label: item.name };
  });

  useOnClickOutside(node, () => setOpen(false));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguagesList());
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
              <RightContainer open={open}>
                <Select
                  options={languagesUpdatedList}
                  styles={customStyles}
                  onChange={changeHandler}
                  placeholder={languageLabel}
                  components={{
                    // eslint-disable-next-line react/display-name
                    DropdownIndicator: () => <GlobeIcon src={globe} alt={logoAlt} />,
                    IndicatorSeparator: () => null
                  }}
                />
                <SendRequestButton
                  target={BLANK}
                  href={sentRequest?.h_link}
                  data-tip="By sending a request, you acknowledge and agree to ACP’s terms and conditions"
                  data-background-color="gray"
                >
                  {sentRequest?.title}
                  <PaperPlaneIcon />
                </SendRequestButton>
                <ReactTooltipStyled place="bottom" effect="float" multiline />
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
  sentRequest: navbarObject,
  navbarMenus: PropTypes.arrayOf(navbarObject),
  loading: PropTypes.bool,
  languageLabel: PropTypes.string.isRequired,
  setLanguageLabel: PropTypes.func.isRequired,
  languagesList: PropTypes.array
};

const mapStateToProps = state => {
  return {
    sentRequest: sentRequestSelector(state),
    navbarMenus: navbarMenusSelector(state),
    loading: loadingSelector(state),
    languagesList: languagesSelector(state)
  };
};

export default connect(mapStateToProps)(Navbar);
