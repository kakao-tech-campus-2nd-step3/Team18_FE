import { useContext } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './index.context';
import loadable from '@loadable/component';

export interface ModalProps {
  [key: string]: unknown;
}

export const modals = {
  roleModal: loadable(() => import('@features/auth/SignUp/components/common/RoleModal')),
};

export default function Modals() {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;

    const handleClose = () => close(Component);

    const handleSubmit = async () => {
      if (typeof onSubmit === 'function') await onSubmit();
      handleClose();
    };

    return <Component {...restProps} key={index} onClose={handleClose} onSubmit={handleSubmit} />;
  });
}
