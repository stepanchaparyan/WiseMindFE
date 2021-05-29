import styled from 'styled-components';
import { tabletUp, desktopUp } from '../../styles/mediaQueries/mixins';
import { Accordion } from 'react-accessible-accordion';

export const Container = styled.div`
  background-color: #3257740f;
`;

export const Context = styled.div`
  margin: auto 24px;
  padding-bottom: 30px;
  font-size: 14px;
  overflow-wrap: break-word;
  ${tabletUp`
    font-size: 16px;
    margin: auto 100px;
    padding-bottom: 50px;
  `};
`;

export const MainText = styled.div`
  > span {
    display: block;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  ${desktopUp`
    padding-left: 100px;
    padding-top: 100px;
    flex-direction: row;
  `};
`;

export const Title = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
  margin: auto;
  ${desktopUp`
    font-size: 52px;
    margin: 0 0 12px 70px;
  `};
`;

export const LogoContainer = styled.div`
  margin: auto;
  padding: 0;
  ${desktopUp`
    margin: 0;
    padding-left: 150px;
  `};
`;

export const Logo = styled.img`
  width: 100px;
`;

export const MyAccordion = styled(Accordion)`
  .accordion__item {
  }
  .accordion__heading {
  }

  .accordion__button {
    background-color: #a4b7d0b5;
    border: 0 solid gray;
    width: auto;
    margin: 0.5px;
  }
  .accordion__panel {
    line-height: 24px;
    text-indent: 20px;
    background-color: #d3d3d340;
  }
`;

export const GroupTherapyTexts = styled.div`
  color: ${props => (props.index === 2 ? 'gray' : 'inherit')};
  font-weight: ${props => (props.index === 2 ? 'bold' : 'normal')};
  margin: ${props => (props.index === 2 ? '4px 0' : '0')};
  font-size: ${props => (props.index === 2 ? '18px' : 'inherit')};
`;
