import { http, HttpResponse } from 'msw';
import { HOME_PATH } from '../path';

export const slidesMockHandler = [http.get(HOME_PATH.SLIDER, () => HttpResponse.json(SLIDER_RESPONSE_DATA))];

const SLIDER_RESPONSE_DATA = [
  {
    id: 1,
    imageUrl: 'https://www.v-on.kr/wp-content/uploads/2022/06/IT_twi001t2302755-1024x683.jpg',
  },
  {
    id: 2,
    imageUrl: 'https://www.v-on.kr/wp-content/uploads/2022/06/IT_twi001t2302755-1024x683.jpg',
  },
  {
    id: 3,
    imageUrl: 'https://www.v-on.kr/wp-content/uploads/2022/06/IT_twi001t2302755-1024x683.jpg',
  },
];
