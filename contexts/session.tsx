import useSessionContextState from 'hooks/useSessionContextState';
import React from 'react';
import type { SessionContextState } from 'types/context/session';
import { initialSessionContextState } from 'utils/initailContextState';

// SessionContextState
const { Provider, Consumer } = React.createContext<SessionContextState>(
  initialSessionContextState
);

export const SessionProvider: React.FC = ({ children }) => (
  <Provider value={useSessionContextState()}>{children}</Provider>
);

export const SessionConsumer = Consumer;
