import theme from '@/assets/theme';
import { Select, Icon, List } from '@/components/common';
import useGlobalSelect from '@/components/common/Select/hooks/useGlobalSelect';

const triggerStyle = { minWidth: '80px', fontSize: '16px', fontWeight: '700', color: theme.palettes.blue };

const languageOptions = [
  {
    value: 'korean',
    text: '한국어',
    action: () => console.log('한국어'),
  },
  {
    value: 'vietnamese',
    text: '베트남어',
    action: () => console.log('베트남어'),
  },
];

export default function LanguageFilter() {
  const { selectedOption, handleSelect } = useGlobalSelect(languageOptions[0]);

  return (
    <Select.Root>
      <Select.Trigger icon={<Icon.Arrow.DownBlue />} css={triggerStyle}>
        {selectedOption.text}
      </Select.Trigger>
      <Select.Content>
        <List
          items={languageOptions}
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
