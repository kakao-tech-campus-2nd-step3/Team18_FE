import { setupWorker } from 'msw/browser';
import { recruitmentsMockHandler } from '@/apis/home/mocks/recruitmentsMockHandler';
import { slidesMockHandler } from '@/apis/home/mocks/slidesMockHandler';

export const worker = setupWorker(...recruitmentsMockHandler, ...slidesMockHandler);
