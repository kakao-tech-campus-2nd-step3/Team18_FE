import { renderWithProviders } from '@/__test__/test-utils';
import { server } from '@/mocks/server';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import Resume from '../Resume';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, screen, act } from '@testing-library/react';

const queryClient = new QueryClient();

describe('Resume 컴포넌트 테스트', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderResumeForm = () => {
    return renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Resume />
      </QueryClientProvider>,
    );
  };

  it('모든 필드를 올바르게 입력한 경우 버튼이 눌린다', async () => {
    renderResumeForm();

    const nameInput = screen.getByPlaceholderText('이름을 입력하세요.');
    const addressInput = screen.getByPlaceholderText('주소를 입력하세요.');
    const phoneNumberInput = screen.getByPlaceholderText('010-0000-0000 형식의 번호를 입력하세요.');
    const careerInput = screen.getByPlaceholderText('경력을 입력하세요.');
    const introductionTextarea = screen.getByPlaceholderText('자기소개를 입력하세요.');

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: '이재용' } });
      fireEvent.change(addressInput, { target: { value: '서울시 강남구' } });
      fireEvent.change(phoneNumberInput, { target: { value: '010-1234-5678' } });
      fireEvent.change(careerInput, { target: { value: '3년' } });
      fireEvent.change(introductionTextarea, { target: { value: '돈 줘' } });
    });

    const submitButton = screen.getByRole('button', { name: '제출하기' });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(submitButton).toBeEnabled();
  });

  it('잘못된 전화번호 형식을 입력하면 에러 메시지를 표시한다', async () => {
    renderResumeForm();

    const phoneNumberInput = screen.getByPlaceholderText('010-0000-0000 형식의 번호를 입력하세요.');
    const submitButton = screen.getByRole('button', { name: '제출하기' });

    await act(async () => {
      fireEvent.change(phoneNumberInput, { target: { value: '1234' } });
      fireEvent.click(submitButton);
    });

    const errorMessage = await screen.findByText('올바른 전화번호 형식이 아닙니다. (예: 010-0000-0000)');
    expect(errorMessage).toBeInTheDocument();
  });
});
