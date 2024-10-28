import { http, HttpResponse } from 'msw';
import { getRegisterSign } from './useRegisterSign';

export const registerSignMockHandler = [
  http.post(getRegisterSign(), async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('imageUrl');

    if (file instanceof File) {
      console.log('File name:', file.name);
      console.log('File type:', file.type);
      console.log('File size:', file.size);
    } else {
      console.log('오류 오류');
    }

    return HttpResponse.json(
      { message: '파일이 성공적으로 수신되었습니다.', fileName: file instanceof File ? file.name : null },
      { status: 201 },
    );
  }),
];
