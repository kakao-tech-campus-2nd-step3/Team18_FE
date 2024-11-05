import { http, HttpResponse } from 'msw';
import { getMyApplicationPath } from '../hooks/useGetMyApplication';
import { myRecruitList } from '@/pages/myPage/employee/data/index.mock';

export const EmployeePageMockHandler = [
  http.get(getMyApplicationPath(), () => {
    return HttpResponse.json(myRecruitList);
  }),
];
