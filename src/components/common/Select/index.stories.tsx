import type { Meta, StoryObj } from '@storybook/react';
import Select from '.';
import { SelectOptionType } from '@/types/select';
import useGlobalSelect from './hooks/useGlobalSelect';
import { Icon } from '@/components/common';

const options: SelectOptionType[] = [
  { value: 'korean', text: '한국어', action: () => console.log('한국어 선택') },
  { value: 'english', text: '영어', action: () => console.log('영어 선택') },
  { value: 'vietnamese', text: '베트남어', action: () => console.log('베트남어 선택') },
];

const meta: Meta<typeof Select> = {
  title: 'common/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'boolean',
      description: '아이콘을 표시할지 여부를 결정',
    },
    options: {
      control: 'object',
      description: '선택할 수 있는 옵션 목록',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    const { selectedOption, handleSelect } = useGlobalSelect(options[0]);

    return (
      <Select.Root>
        <Select.Trigger {...args} icon={<Icon.Arrow.DownBlue />}>
          {selectedOption.text}
        </Select.Trigger>
        <Select.Content>
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value} onClick={() => handleSelect(option)}>
              {option.text}
            </Select.Option>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
  args: {
    icon: true,
    options,
  },
};

export const NoIcon: Story = {
  render: (args) => {
    const { selectedOption, handleSelect } = useGlobalSelect(options[0]);

    return (
      <Select.Root>
        <Select.Trigger {...args}>{selectedOption.text}</Select.Trigger>
        <Select.Content>
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value} onClick={() => handleSelect(option)}>
              {option.text}
            </Select.Option>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
  args: {
    icon: false,
    options,
  },
};

export const WithMultipleOptions: Story = {
  render: (args) => {
    const { selectedOption, handleSelect } = useGlobalSelect(options[0]);

    return (
      <Select.Root>
        <Select.Trigger {...args} icon={<Icon.Arrow.DownBlue />}>
          {selectedOption.text}
        </Select.Trigger>
        <Select.Content>
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value} onClick={() => handleSelect(option)}>
              {option.text}
            </Select.Option>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
  args: {
    icon: true,
    options: [
      { value: 'korean', text: '한국어', action: () => console.log('한국어 선택') },
      { value: 'english', text: '영어', action: () => console.log('영어 선택') },
      { value: 'vietnamese', text: '베트남어', action: () => console.log('베트남어 선택') },
      { value: 'japanese', text: '일본어', action: () => console.log('일본어 선택') },
    ],
  },
};
