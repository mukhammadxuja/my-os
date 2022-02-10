/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledTaskbar = styled.nav`
  background-color: #252525;
  bottom: 0;
  color: #fff;
  font-size: 30px;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  left: 0;
  position: fixed;
  right: 0;
  width: 100%;
`;