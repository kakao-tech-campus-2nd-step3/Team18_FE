import { Icon } from '@components/common';

export const roleConfig = {
  employer: {
    icon: <Icon.Role.Employer />,
    text: '사업주 가입',
    modalContent: (
      <>
        이력서에 대한 정보가 필요해요.
        <br />
        이력서 정보를 등록하러 가실까요?
      </>
    ),
  },
  worker: {
    icon: <Icon.Role.Worker />,
    text: '근로자 가입',
    modalContent: (
      <>
        사업장에 대한 정보가 필요해요.
        <br />
        사업주 정보를 등록하러 가실까요?
      </>
    ),
  },
};
