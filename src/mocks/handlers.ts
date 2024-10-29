import { recruitmentsMockHandler } from '@/apis/home/mocks/recruitmentsMockHandler';
import { slidesMockHandler } from '@/apis/home/mocks/slidesMockHandler';
import { EmployeePageMockHandler } from '@/apis/employee/mock/getMyApplication.mock';
import { noticesMockHandler } from '@/apis/employer/mock/postNotice.mock';
import { registerSignMockHandler } from '@/apis/registerSign/registerSign.mock';
import { myCompaniesMockHandler } from '@/apis/companies/mocks/myCompaniesMockHandler';
import { myRecruitmentsMockHandler } from '@/apis/recruitments/mocks/myRecruitmentsMockHandler';
import { myApplicantsMockHandler } from '@/apis/applicants/mocks/myApplicantsMockHandler';
import { foreignerMockHandler } from '@/apis/applicants/mocks/foreignerMockHandler';
import { visaMockHandler } from '@/apis/applicants/mocks/visaMockHandler';
import { postApplyMockHandler } from '@apis/apply/postApply.mock';

export const handlers = [
  ...recruitmentsMockHandler,
  ...slidesMockHandler,
  ...noticesMockHandler,
  ...EmployeePageMockHandler,
  ...registerSignMockHandler,
  ...myCompaniesMockHandler,
  ...myRecruitmentsMockHandler,
  ...myApplicantsMockHandler,
  ...foreignerMockHandler,
  ...visaMockHandler,
  ...postApplyMockHandler,
];
