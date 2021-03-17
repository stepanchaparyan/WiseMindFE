import styled, { keyframes } from 'styled-components';
import ArrowUpIconPNG from '../../../assets/arrow-up.png';

export const Container = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  animation: ${fadeIn} 700ms ease-in-out 1s both;
  cursor: pointer;
`;

const fadeIn = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `;

export const BlueButton = styled.div`
  display: flex;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 4px;
  cursor: pointer;
  padding: 14px;
  background: ${props => props.theme.lightBlue};
  :hover {
    background: ${props => props.theme.navGreen};
    transition: color 0.5s;
  }
`;

export const ArrowUp = styled.div`
  height: 16px;
  width: 16px;
  background-image: url(${ArrowUpIconPNG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
