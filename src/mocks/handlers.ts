import { recruitmentsMockHandler } from '@/apis/home/mocks/recruitmentsMockHandler';
import { slidesMockHandler } from '@/apis/home/mocks/slidesMockHandler';
import { EmployeePageMockHandler } from '@/apis/employee/mock/getMyApplication.mock';
import { noticesMockHandler } from '@/apis/employer/mock/postNotice.mock';
import { registerSignMockHandler } from '@/apis/registerSign/registerSign.mock';
import { postApplyMockHandler } from '@apis/apply/postApply.mock';

export const handlers = [
  ...recruitmentsMockHandler,
  ...slidesMockHandler,
  ...noticesMockHandler,
  ...EmployeePageMockHandler,
  ...registerSignMockHandler,
  ...postApplyMockHandler,
];
