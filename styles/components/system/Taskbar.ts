/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledTaskbar = styled.footer`
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.colors.taskbar};
  bottom: 0;
  font-size: 30px;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
`;
