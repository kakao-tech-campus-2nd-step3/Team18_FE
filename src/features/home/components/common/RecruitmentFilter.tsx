import theme from '@/assets/theme';
import { Select, Icon, List } from '@/components/common';
import useSelect from '@/components/common/Select/hooks/useSelect';

const filterOptions = [
  {
    value: 'all',
    text: '전체',
    action: () => console.log('All clicked'),
  },
  {
    value: 'age',
    text: '나이',
    action: () => console.log('Age clicked'),
  },
  {
    value: 'area',
    text: '지역',
    action: () => console.log('Area clicked'),
  },
];

const triggerStyle = { minWidth: '80px', fontSize: '16px', fontWeight: '700', color: theme.palettes.blue };

export default function RecruitmentFilter() {
  const { selectedOption, handleSelect } = useSelect(filterOptions[0]);

  return (
    <Select.Root>
      <Select.Trigger icon={<Icon.Arrow.DownBlue />} css={triggerStyle}>
        {selectedOption.text}
      </Select.Trigger>
      <Select.Content>
        <List
          items={filterOptions}
          renderItem={(option) => (
            <Select.Option key={option.value} value={option.value} onClick={() => handleSelect(option)}>
              {option.text}
            </Select.Option>
          )}
        />
      </Select.Content>
    </Select.Root>
  );
}
