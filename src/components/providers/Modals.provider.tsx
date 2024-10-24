import { ModalsDispatchContext, ModalsStateContext } from '../common/Modal/index.context';
import { PropsWithChildren, useState, useMemo } from 'react';

interface ModalState {
  Component: React.ComponentType<any>;
  props: any;
}

const ModalsProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [openedModals, setOpenedModals] = useState<ModalState[]>([]);

  const open = (Component: React.ComponentType<any>, props: any) => {
    setOpenedModals((modals) => [...modals, { Component, props }]);
  };

  const close = (Component: React.ComponentType<any>) => {
    setOpenedModals((modals) => modals.filter((modal) => modal.Component !== Component));
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>{children}</ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
