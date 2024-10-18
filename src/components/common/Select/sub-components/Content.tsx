import styled from '@emotion/styled';
import { useSelectContext } from '../index.context';

export const SelectContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSelectContext();

  return <Content isOpen={isOpen}>{children}</Content>;
};

export const Content = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${({ theme }) => theme.palettes.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  min-width: 160px;
  z-index: 1000;
`;
