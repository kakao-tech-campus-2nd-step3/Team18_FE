import { Flex } from '@components/common';
import { useSelectContext } from '../index.context';
import { PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  icon?: ReactNode;
} & PropsWithChildren;

export const SelectTrigger = ({ icon, children, ...rest }: Props) => {
  const { toggle } = useSelectContext();

  return (
    <button onClick={toggle} {...rest}>
      <Flex justifyContent="space-between" alignItems="center">
        {children}
        {icon && <Icon>{icon}</Icon>}
      </Flex>
    </button>
  );
};

const Icon = styled.div`
  display: flex;
  align-items: center;
`;
