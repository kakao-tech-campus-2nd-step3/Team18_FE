import { http, HttpResponse } from 'msw';
import { HOME_PATH } from '../path';

export const recruitmentsMockHandler = [
  http.get(HOME_PATH.RECRUITMENTS, () => HttpResponse.json(RECRUITMENTS_RESPONSE_DATA)),
];

const RECRUITMENTS_RESPONSE_DATA = [
  {
    recruitmentId: 1,
    imageUrl:
      'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
    koreanTitle: '제목',
    vietnameseTitle: '제목',
    companyName: '카카오',
    salary: 3000,
    workHours: '3개월',
    area: '대전광역시 유성구',
  },
  {
    recruitmentId: 2,
    imageUrl:
      'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
    koreanTitle: '제목',
    vietnameseTitle: '제목',
    companyName: '카카오',
    salary: 3000,
    workHours: '3개월',
    area: '대전광역시 유성구',
  },
  {
    recruitmentId: 3,
    imageUrl:
      'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
    koreanTitle: '제목',
    vietnameseTitle: '제목',
    companyName: '카카오',
    salary: 3000,
    workHours: '3개월',
    area: '대전광역시 유성구',
  },
];
