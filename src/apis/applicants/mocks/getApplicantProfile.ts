import { http, HttpResponse } from 'msw';
import { APIPath } from '@/apis/apiPath';

const mockData = {
  applicantName: '임세빈',
  address: '충남대학교',
  phoneNumber: '010-1111-1111',
  career: `카페에서 1년 알바했습니다. 클럽에서 30년 근무했습니다.`,
  koreanLanguageLevel: '고급',
  introduction: `맡은 업무에 항상 최선을 다하는 인재입니다. 안녕하세용안녕하세용안녕하세용안녕하세용안녕하세용안녕하세용`,
  motivation: '돈',
};

export const getProfileInfoHandler = [
  http.get(APIPath.getApplicantProfile, () => {
    return HttpResponse.json(mockData);
  }),
];
