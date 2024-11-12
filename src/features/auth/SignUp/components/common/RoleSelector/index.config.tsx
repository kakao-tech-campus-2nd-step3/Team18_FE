import { Icon } from '@components/common';
import ROUTE_PATH from '@/routes/path';
import { responsiveStyle } from '@utils/responsive';
import { TFunction } from 'i18next';

export const getRoleConfig = (t: TFunction) => ({
  employer: {
    icon: (
      <Icon.Role.Employer
        css={responsiveStyle({
          mobile: {
            width: '52px',
          },
        })}
      />
    ),
    text: t('signUp.buttons.employer'),
    modalContent: <>{t('signUpModal.detailMessage.employer')}</>,
    toNavigate: ROUTE_PATH.REGISTERCOMPANY,
  },
  employee: {
    icon: (
      <Icon.Role.Worker
        css={responsiveStyle({
          mobile: {
            width: '52px',
          },
        })}
      />
    ),
    text: t('signUp.buttons.employee'),
    modalContent: <>{t('signUpModal.detailMessage.employee')}</>,
    toNavigate: ROUTE_PATH.RESUME,
  },
});
