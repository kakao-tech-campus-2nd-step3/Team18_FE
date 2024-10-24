import { noticesMockHandler } from '@/apis/employer/mock/postNotice.mock';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...noticesMockHandler);
