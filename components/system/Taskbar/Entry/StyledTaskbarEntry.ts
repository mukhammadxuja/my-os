import styled from 'styled-components';

const centered = `
  display: flex;
`;

export const StyledTaskbarEntry = styled.li`
  border-bottom: ${({ theme }) => theme.colors.heightLight};
  height: 100%;
  margin: 0 4px;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  ${centered};
  min-width: 0;
  padding: 0;
  width: ${({ theme }) => `calc(${theme.sizes.taskbar.entry.maxWidth} - 8px)`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
    margin: 0;
    padding: 0 4px;
    width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  }

  figure {
    align-items: center;
    display: flex;
    padding: 4px;

    figcaption {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
      margin-left: 4px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    img {
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      image-rendering: pixelated;
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
    image-rendering: pixelated;
  }
`;

export default StyledTaskbarEntry;