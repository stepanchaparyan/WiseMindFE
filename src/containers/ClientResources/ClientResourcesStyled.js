import styled from 'styled-components';
import { tabletUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  background-color: ${props => props.theme.greenBlue};
  padding-top: 100px;
  ${tabletUp`
    padding-top: 120px;
  `};
`;

export const ResourceList = styled.div`
  padding: 8px 4px 16px 4px;
  background-color: ${props => props.theme.white};
  margin: 0px 24px;
  border-radius: 5px 5px 0 0;
  ${tabletUp`
    margin: 0 100px;
    padding: 24px 64px 48px 64px;
  `};
`;

export const Title = styled.div`
  padding: 12px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  ${tabletUp`
    font-size: 36px;
  `};
`;

export const Resource = styled.a`
  display: flex;
  cursor: pointer;
  color: ${props => props.theme.electricBlue};
  text-decoration: none;
  font-size: 13px;
  padding: 8px 12px;
  margin: 16px;
  border: ${props => `1px solid ${props.theme.gray3}`};
  border-radius: 3px;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 12%);
  ${tabletUp`
    font-size: 20px;
    padding: 12px 24px;
  `};
`;
