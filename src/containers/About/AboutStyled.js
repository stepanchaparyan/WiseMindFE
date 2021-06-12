import styled from 'styled-components';
import { tabletUp, desktopUp, desktopBigeUp } from '../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  height: ${props => (props.isMobileOrTablet ? '100%' : '100vh')};
  background-color: ${props => props.theme.lightGray};
`;

export const Context = styled.div`
  margin: auto 24px;
  padding-bottom: 30px;
  font-size: 14px;
  overflow-wrap: break-word;
  ${tabletUp`
    font-size: 16px;
    padding-bottom: 50px;
  `};
  ${desktopBigeUp`
    margin: auto 0 auto 100px;
  `};
`;

export const MainText = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const MainText1 = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;
  width: 75vw;
`;

export const MainText2 = styled(MainText1)`
  width: 70vw;
`;

export const MainText3 = styled(MainText1)`
  width: 60vw;
`;

export const MainText4 = styled(MainText1)`
  width: 50vw;
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
    padding-left: 100px;
  `};
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Triangle = styled.div`
  position: absolute;
  right: 0;
  width: 0;
  height: 0;
  border-top: 70vh solid transparent;
  border-right: ${props => `50vw solid ${props.theme.grayBlue}`};
  align-self: flex-end;
`;

export const Line = styled.div`
  position: absolute;
  right: -300px;
  width: 1500px;
  border-bottom: ${props => `3px solid ${props.theme.grayBlue}`};
  transform: rotate(35deg);
`;
