import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tabletUp, desktopUp } from '../../styles/mediaQueries/mixins';

export const ButtonStyled = styled(Link)`
  align-items: center;
  padding: 10px 24px;
  margin: auto 14px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 12px;
  letter-spacing: 1px;
  white-space: nowrap;
  border: ${({ bordercolor }) => (bordercolor ? `1px solid ${bordercolor}` : 0)};
  color: ${({ textcolor }) => textcolor};
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  transition: background-color 0.5s;
  :hover {
    background-color: ${({ backgroundhovercolor }) => backgroundhovercolor};
    color: ${({ texthovercolor }) => texthovercolor};
    border: ${({ borderhovercolor }) => borderhovercolor && `1px solid ${borderhovercolor}`};
  }
  ${tabletUp`
    padding: 14px 40px;
    margin: auto 30px;
  `};
  ${desktopUp`
    padding: 17px 54px;
    margin: auto 40px;
  `};
`;
