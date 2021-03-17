import styled from 'styled-components';

export const LoadingStyled = styled.div`
  position: absolute;
  top: ${props => `calc(50% + ${props.top}px)`};
  left: calc(50% - 40px);
`;
