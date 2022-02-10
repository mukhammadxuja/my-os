/* eslint-disable @typescript-eslint/no-explicit-any */
import StyleWindow from 'styles/components/system/StyledWindow';

const Window = ({ children }: any): JSX.Element => {
  return (
    <div>
      <StyleWindow>{children}</StyleWindow>
    </div>
  );
};

export default Window;
