import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { desktopUp } from '../../styles/mediaQueries/mixins';
import PaperPlaneWhite from '../../assets/paper-plane-16_white.png';
import PaperPlaneGray from '../../assets/paper-plane-16_gray.png';
import ReactFlagsSelect from 'react-flags-select';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 60px;
  width: 100%;
  background: ${({ visible }) =>
    visible ? 'slategray' : 'repeating-linear-gradient(180deg, black, transparent 100px)'};
  opacity: 0.9;
  text-align: center;
  transition: background 0.5s;
  z-index: 1;
`;

export const LogoContainer = styled(NavLink)`
  margin: 0;
  padding: 0;
  padding-left: 16px;
  ${desktopUp`
    padding-left: 100px;
  `};
`;

export const Logo = styled.img`
  width: 50px;
`;

export const NavLinks = styled.div`
  display: flex;
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 0.4px;
  margin: 120px auto auto 30px;
  align-items: baseline;
  flex-direction: column;
  ${desktopUp`
    flex-direction: row;
    margin: auto;
    align-items: center;
  `};
`;

const activeClassName = 'active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  text-decoration: none;
  color: ghostwhite;
  margin: 10px 20px;
  font-weight: bold;
  ${desktopUp`
    margin: 0 20px;
    align-self: auto;
  `};
  &.${activeClassName} {
    color: ${props => props.theme.navGreen};
    font-weight: bold;
  }
  :hover {
    color: ${props => props.theme.navGreen};
    transition: color 0.5s;
  }
`;

export const NavLinkContainer = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  background: ${props => props.theme.black};
  color: white;
  position: absolute;
  top: 56px;
  width: 100%;
  height: 300px;
  z-index: 1;
  ${desktopUp`
    display: flex;
    background: none;
    position: relative;
    top: 0;
  `};
`;

export const RightContainer = styled.div`
  flex-direction: column;
  font-weight: bold;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  background: ${props => props.theme.black};
  z-index: 1;
  position: absolute;
  top: 70px;
  right: 10px;
  ${desktopUp`
    display: flex;
    flex-direction: row;
    position: relative;
    background: none;
    padding-right: 30px;
    top: 3px;
  `};
`;

export const SendRequestButton = styled.a`
  display: flex;
  padding: 8px;
  height: 16px;
  border: solid 1px white;
  background: transparent;
  text-align: center;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  ${desktopUp`
    margin-left: 30px;
  `};
  :hover {
    background: white;
    color: gray;
  }
  :hover > div {
    background-image: url(${PaperPlaneGray});
  }
`;

export const PaperPlaneIcon = styled.div`
  width: 10px;
  height: 14px;
  padding: 2px 0 0 6px;
  margin-left: 10px;
  background-image: url(${PaperPlaneWhite});
`;

export const Hamburger = styled.img`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 14px;
  top: 14px;
  ${desktopUp`
    display: none;
  `};
`;

export const ReactFlagsSelectStyled = styled(ReactFlagsSelect)`
  button {
    color: white;
    padding: 4px;
    font-weight: bold;
    border: 1px solid;
    outline: none;
    ${desktopUp`
      background: slategray;
      border: none;
    `};
  }
  ${desktopUp`
    min-width: 130px;
  `};
`;
