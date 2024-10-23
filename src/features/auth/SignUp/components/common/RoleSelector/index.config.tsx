import { responsiveStyle } from '@utils/responsive';
import { Icon } from '@components/common';
import ROUTE_PATH from '@/routes/path';

export const roleConfig = {
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
    text: '사업주 가입',
    modalContent: (
      <>
        이력서에 대한 정보가 필요해요.
        <br />
        이력서 정보를 등록하러 가실까요?
      </>
    ),
    toNavigate: ROUTE_PATH.HOME, // 이력서 등록 페이지로 변경
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
    text: '근로자 가입',
    modalContent: (
      <>
        사업장에 대한 정보가 필요해요.
        <br />
        사업주 정보를 등록하러 가실까요?
      </>
    ),
    toNavigate: ROUTE_PATH.HOME, // 회사 등록 페이지로 변경
  },
};
