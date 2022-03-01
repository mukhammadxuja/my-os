import { CloseIcon, MaximizeIcon, MinimizeIcon } from 'components/system/Icons';
import { useProcesses } from 'contexts/process';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';
import StyledTitleBar from 'styles/components/system/Window/StyledTitlebar';

type TitlebarProps = {
  pid: string;
};

const Titlebar = ({ pid }: TitlebarProps) => {
  const {
    close,
    maximized,
    minimized,
    processes: {
      [pid]: { icon, title }
    }
  } = useProcesses();
  const onMinimize = useCallback(() => minimized(pid), [pid, minimized]);
  const onMaximize = useCallback(() => maximized(pid), [pid, maximized]);
  const onClose = useCallback(() => close(pid), [pid, close]);

  return (
    <StyledTitleBar className="handle">
      <h1>
        <figure>
          <Image src={icon} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button onClick={onMaximize}>
          <MaximizeIcon />
        </Button>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitleBar>
  );
};

export default Titlebar;
