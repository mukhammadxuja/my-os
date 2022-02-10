import styled from 'styled-components';

export const StyledStartButton = styled.button`
  background-color: #1cbe21;
  color: #fff;
  height: 100%;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.sizes.StartButton.width};
`;

export default StyledStartButton;