import { recruitmentsMockHandler } from '@/apis/home/mocks/recruitmentsMockHandler';
import { slidesMockHandler } from '@/apis/home/mocks/slidesMockHandler';

export const handlers = [...recruitmentsMockHandler, ...slidesMockHandler];
