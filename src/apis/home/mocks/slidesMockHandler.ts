import { APIPath } from '@/apis/apiPath';
import { http, HttpResponse } from 'msw';

export const slidesMockHandler = [http.get(APIPath.getSlides, () => HttpResponse.json(SLIDER_RESPONSE_DATA))];

const SLIDER_RESPONSE_DATA = [
  {
    imageUrl: 'https://www.v-on.kr/wp-content/uploads/2022/06/IT_twi001t2302755-1024x683.jpg',
  },
  {
    imageUrl: 'https://www.v-on.kr/wp-content/uploads/2022/06/IT_twi001t2302755-1024x683.jpg',
  },
  {
    imageUrl: 'https://www.v-on.kr/wp-content/uploads/2022/06/IT_twi001t2302755-1024x683.jpg',
  },
];
