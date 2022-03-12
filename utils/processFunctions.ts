import type { Processes } from 'utils/processDirectory';
import { processDirectory } from 'utils/processDirectory';

export const closeProcess =
  (pid: string) =>
  ({ [pid]: _closeProcess, ...remainingProcesses }: Processes): Processes =>
    remainingProcesses;

export const openProcess = (pid: string, url: string) => {
  const id = url ? `${pid}_${url}` : pid;
  return (currentProcesses: Processes): Processes =>
    currentProcesses[id] || !processDirectory[pid]
      ? currentProcesses
      : { ...currentProcesses, [id]: { ...processDirectory[pid], url } };
};

export const toggleProcessSetting =
  (pid: string, setting: 'maximized' | 'minimized') =>
  ({ [pid]: process, ...otherProcesses }: Processes): Processes =>
    process
      ? {
          [pid]: { ...process, [setting]: !process[setting] },
          ...otherProcesses
        }
      : otherProcesses;

export const maximizeProcess =
  (pid: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(pid, 'maximized')(processes);

export const minimizeProcess =
  (pid: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(pid, 'minimized')(processes);
