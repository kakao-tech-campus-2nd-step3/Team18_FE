import theme from '@/assets/theme';
import { Select, Icon, List } from '@/components/common';
import { useLanguage } from '@/components/providers/Language.provider';
import { responsiveStyle } from '@/utils/responsive';
import i18n from '@/assets/translator/i18n';

type LanguageOptionType = {
  value: string;
  text: string;
};

const triggerStyle = {
  minWidth: '80px',
  fontSize: '16px',
  fontWeight: '700',
  color: theme.palettes.blue,

  ...responsiveStyle({
    mobile: {
      width: '100%',
    },
  }),
};

const languageOptions = [
  {
    value: 'ko',
    text: '한국어',
    action: () => console.log('한국어'),
  },
  {
    value: 've',
    text: 'Tiếng Việt',
    action: () => console.log('Tiếng Việt'),
  },
];

export default function LanguageFilter() {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (option: LanguageOptionType) => {
    setLanguage(option.value);
    i18n.changeLanguage(option.value);
  };

  return (
    <Select.Root>
      <Select.Trigger icon={<Icon.Arrow.DownBlue />} css={triggerStyle}>
        {languageOptions.find((opt) => opt.value === language)?.text}
      </Select.Trigger>
      <Select.Content>
        <List
          items={languageOptions}
          renderItem={(option) => (
            <Select.Option key={option.value} value={option.value} onClick={() => changeLanguage(option)}>
              {option.text}
            </Select.Option>
          )}
        />
      </Select.Content>
    </Select.Root>
  );
}
