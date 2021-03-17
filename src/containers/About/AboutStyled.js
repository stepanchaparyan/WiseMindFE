import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tabletUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  background-color: lightBlue;
  width: 100%;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const WelcomeText = styled.div`
  margin-top: 80px;
  font-size: 30px;
  padding: 32px 32px 0 32px;
  height: 110px;
`;

export const LongText = styled.div`
  font-size: 20px;
  padding: 12px;
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.cadetblue};
  margin: 32px;
  text-decoration: none;
  font-size: 26px;
  ${tabletUp`
    font-size: 32px;
  `};
`;
