import { PropsWithChildren } from 'react';
import { useSelectContext } from '../index.context';
import styled from '@emotion/styled';

type Props = {
  value: string;
  onClick?: () => void;
} & PropsWithChildren;

export const SelectOption = ({ children, value, onClick, ...rest }: Props) => {
  const { selectedValue, onItemSelect } = useSelectContext();

  const handleOptionClick = () => {
    if (onClick) onClick();
    onItemSelect(value);
  };

  return (
    <Option onClick={handleOptionClick} isSelected={value === selectedValue} {...rest}>
      {children}
    </Option>
  );
};

export const Option = styled.div<{ isSelected: boolean }>`
  padding: 8px 12px;
  cursor: pointer;
  color: ${({ theme, isSelected }) => (isSelected ? theme.palettes.blue : theme.palettes.black)};
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};

  &:hover {
    background-color: #f1f1f1;
    color: ${({ theme }) => theme.palettes.blue};
    font-weight: 700;
  }
`;
