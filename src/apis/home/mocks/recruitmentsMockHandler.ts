import { getDynamicAPIPath } from '@/apis/apiPath';
import { http, HttpResponse } from 'msw';

export const recruitmentsMockHandler = [
  http.get(getDynamicAPIPath.getRecruitments(':filter'), async ({ params }) => {
    const filter = params.filter as keyof typeof RECRUITMENTS_RESPONSE_DATA;
    const data = RECRUITMENTS_RESPONSE_DATA[filter] || RECRUITMENTS_RESPONSE_DATA.all;
    return HttpResponse.json(data);
  }),
];

const RECRUITMENTS_RESPONSE_DATA = {
  all: {
    content: [
      {
        recruitmentId: 1,
        imageUrl:
          'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
        koreanTitle: '제목1',
        vietnameseTitle: 'Tiêu đề1',
        companyName: '카카오',
        salary: 3000,
        workHours: '3개월',
        area: '대전광역시 유성구',
      },
      {
        recruitmentId: 2,
        imageUrl:
          'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
        koreanTitle: '제목2',
        vietnameseTitle: 'Tiêu đề2',
        companyName: '네이버',
        salary: 2000,
        workHours: '6개월',
        area: '서울특별시 강남구',
      },
      {
        recruitmentId: 3,
        imageUrl:
          'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
        koreanTitle: '제목3',
        vietnameseTitle: 'Tiêu đề3',
        companyName: '라인',
        salary: 2500,
        workHours: '12개월',
        area: '부산광역시 해운대구',
      },
    ],
    pageable: {
      totalPage: 1,
    },
  },
  salary: {
    content: [
      {
        recruitmentId: 1,
        imageUrl:
          'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
        koreanTitle: '제목1',
        vietnameseTitle: 'Tiêu đề1',
        companyName: '카카오',
        salary: 3000,
        workHours: '3개월',
        area: '대전광역시 유성구',
      },
      {
        recruitmentId: 3,
        imageUrl:
          'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
        koreanTitle: '제목3',
        vietnameseTitle: 'Tiêu đề3',
        companyName: '라인',
        salary: 2500,
        workHours: '12개월',
        area: '부산광역시 해운대구',
      },
      {
        recruitmentId: 2,
        imageUrl:
          'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
        koreanTitle: '제목2',
        vietnameseTitle: 'Tiêu đề2',
        companyName: '네이버',
        salary: 2000,
        workHours: '6개월',
        area: '서울특별시 강남구',
      },
    ],
    pageable: { totalPage: 1 },
  },
  latestRegistration: {
    content: [
      {
        recruitmentId: 2,
        imageUrl:
          'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
        koreanTitle: '제목2',
        vietnameseTitle: 'Tiêu đề2',
        companyName: '네이버',
        salary: 2000,
        workHours: '6개월',
        area: '서울특별시 강남구',
      },
      {
        recruitmentId: 1,
        imageUrl:
          'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
        koreanTitle: '제목1',
        vietnameseTitle: 'Tiêu đề1',
        companyName: '카카오',
        salary: 3000,
        workHours: '3개월',
        area: '대전광역시 유성구',
      },
      {
        recruitmentId: 3,
        imageUrl:
          'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid',
        koreanTitle: '제목3',
        vietnameseTitle: 'Tiêu đề3',
        companyName: '라인',
        salary: 2500,
        workHours: '12개월',
        area: '부산광역시 해운대구',
      },
    ],
    pageable: { totalPage: 1 },
  },
};
