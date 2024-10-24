import { createContext } from 'react';

interface ModalsDispatchContextProps {
  open: (Component: React.ComponentType<any>, props: any) => void;
  close: (Component: React.ComponentType<any>) => void;
}

export const ModalsDispatchContext = createContext<ModalsDispatchContextProps>({
  open: () => {},
  close: () => {},
});

interface ModalState {
  Component: React.ComponentType<any>;
  props: any;
}

export const ModalsStateContext = createContext<ModalState[]>([]);
