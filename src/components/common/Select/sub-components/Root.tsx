import styled from '@emotion/styled';
import { SelectProvider } from '../index.context';

export const SelectRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <SelectProvider>
      <Root>{children}</Root>
    </SelectProvider>
  );
};

export const Root = styled.div`
  position: relative;
  display: inline-block;
`;
