import { EmployeePageMockHandler } from '@/apis/employee/mock/getMyApplication.mock';
import { noticesMockHandler } from '@/apis/employer/mock/postNotice.mock';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...noticesMockHandler, ...EmployeePageMockHandler);
