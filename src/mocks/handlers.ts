import { recruitmentsMockHandler } from '@/apis/home/mocks/recruitmentsMockHandler';
import { slidesMockHandler } from '@/apis/home/mocks/slidesMockHandler';
import { EmployeePageMockHandler } from '@/apis/employee/mock/getMyApplication.mock';
import { noticesMockHandler } from '@/apis/employer/mock/postNotice.mock';

export const handlers = [
  ...recruitmentsMockHandler,
  ...slidesMockHandler,
  ...noticesMockHandler,
  ...EmployeePageMockHandler,
];
