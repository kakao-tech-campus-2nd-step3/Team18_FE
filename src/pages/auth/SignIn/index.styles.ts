import theme from '@/assets/theme';
import { responsiveStyle, responsiveSectionPadding } from '@/utils/responsive';

export const sectionStyle = {
  backgroundColor: theme.palettes.backgroundGray,
  ...responsiveStyle(responsiveSectionPadding),
};

export const innerContainerStyle = responsiveStyle({
  mobile: {
    flexDirection: 'column',
  },
});

export const catchphraseContainerStyle = responsiveStyle({
  default: {
    marginRight: '24px',
  },
  mobile: { marginRight: '0', alignItems: 'center', marginBottom: '32px' },
});
