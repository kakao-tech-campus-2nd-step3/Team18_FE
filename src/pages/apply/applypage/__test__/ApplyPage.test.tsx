import { renderWithProviders } from '@/__test__/test-utils';
import { server } from '@/mocks/server';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import ApplyPage from '../ApplyPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, screen, act } from '@testing-library/react';

const queryClient = new QueryClient();

describe('ApplyPage 컴포넌트 테스트', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderApplyForm = () => {
    return renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <ApplyPage />
      </QueryClientProvider>,
    );
  };

  it('모든 필드를 올바르게 입력한 경우 버튼이 정상적으로 클릭된다', async () => {
    renderApplyForm();

    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요.');
    const addressInput = screen.getByPlaceholderText('주소를 입력해주세요 (예: 대전광역시 유성구 궁동)');
    const phoneNumberInput = screen.getByPlaceholderText('번호를 입력해주세요 (예: 010-0000-0000)');
    const motivationInput = screen.getByPlaceholderText('지원동기를 입력해주세요');

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: '이재용' } });
      fireEvent.change(addressInput, { target: { value: '대전광역시 유성구 궁동' } });
      fireEvent.change(phoneNumberInput, { target: { value: '010-1234-1234' } });
      fireEvent.change(motivationInput, { target: { value: '안녕' } });
    });

    const submitButton = screen.getByRole('button', { name: '지원하기' });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(submitButton).toBeEnabled();
  });

  it('잘못된 전화번호 형식을 입력하면 에러 메시지를 표시한다', async () => {
    renderApplyForm();

    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요.');
    const addressInput = screen.getByPlaceholderText('주소를 입력해주세요 (예: 대전광역시 유성구 궁동)');
    const phoneNumberInput = screen.getByPlaceholderText('번호를 입력해주세요 (예: 010-0000-0000)');
    const motivationInput = screen.getByPlaceholderText('지원동기를 입력해주세요');
    const submitButton = screen.getByRole('button', { name: '지원하기' });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: '이재용' } });
      fireEvent.change(addressInput, { target: { value: '대전광역시 유성구 궁동' } });
      fireEvent.change(phoneNumberInput, { target: { value: '1234' } });
      fireEvent.change(motivationInput, { target: { value: '안녕' } });
      fireEvent.click(submitButton);
    });

    const errorMessage = screen.getByText('올바른 전화번호 형식이 아닙니다. (예: 010-0000-0000)');
    expect(errorMessage).toBeInTheDocument();
  });

  it('이름을 입력하지 않으면 유효성 에러 메시지를 표시한다', async () => {
    renderApplyForm();

    const addressInput = screen.getByPlaceholderText('주소를 입력해주세요 (예: 대전광역시 유성구 궁동)');
    const phoneNumberInput = screen.getByPlaceholderText('번호를 입력해주세요 (예: 010-0000-0000)');
    const motivationInput = screen.getByPlaceholderText('지원동기를 입력해주세요');
    const submitButton = screen.getByRole('button', { name: '지원하기' });

    await act(async () => {
      fireEvent.change(addressInput, { target: { value: '대전광역시 유성구 궁동' } });
      fireEvent.change(phoneNumberInput, { target: { value: '010-1234-5678' } });
      fireEvent.change(motivationInput, { target: { value: '안녕' } });
      fireEvent.click(submitButton);
    });

    const errorMessage = await screen.findByText('이름을(를) 입력해주세요!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('주소를 입력하지 않으면 유효성 에러 메시지를 표시한다', async () => {
    renderApplyForm();

    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요.');
    const phoneNumberInput = screen.getByPlaceholderText('번호를 입력해주세요 (예: 010-0000-0000)');
    const motivationInput = screen.getByPlaceholderText('지원동기를 입력해주세요');
    const submitButton = screen.getByRole('button', { name: '지원하기' });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: '이재용' } });
      fireEvent.change(phoneNumberInput, { target: { value: '010-1234-5678' } });
      fireEvent.change(motivationInput, { target: { value: '성실히 임하겠습니다.' } });
      fireEvent.click(submitButton);
    });

    const errorMessage = await screen.findByText('주소을(를) 입력해주세요!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('번호를 입력하지 않으면 유효성 에러 메시지를 표시한다', async () => {
    renderApplyForm();

    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요.');
    const addressInput = screen.getByPlaceholderText('주소를 입력해주세요 (예: 대전광역시 유성구 궁동)');
    const motivationInput = screen.getByPlaceholderText('지원동기를 입력해주세요');
    const submitButton = screen.getByRole('button', { name: '지원하기' });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: '이재용' } });
      fireEvent.change(addressInput, { target: { value: '대전광역시 유성구 궁동' } });
      fireEvent.change(motivationInput, { target: { value: '하이' } });
      fireEvent.click(submitButton);
    });

    const errorMessage = await screen.findByText('번호을(를) 입력해주세요!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('지원동기를 입력하지 않으면 유효성 에러 메시지를 표시한다', async () => {
    renderApplyForm();

    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요.');
    const addressInput = screen.getByPlaceholderText('주소를 입력해주세요 (예: 대전광역시 유성구 궁동)');
    const phoneNumberInput = screen.getByPlaceholderText('번호를 입력해주세요 (예: 010-0000-0000)');
    const submitButton = screen.getByRole('button', { name: '지원하기' });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: '이재용' } });
      fireEvent.change(addressInput, { target: { value: '대전광역시 유성구 궁동' } });
      fireEvent.change(phoneNumberInput, { target: { value: '010-1234-5678' } });
      fireEvent.click(submitButton);
    });

    const errorMessage = await screen.findByText('지원동기을(를) 입력해주세요!');
    expect(errorMessage).toBeInTheDocument();
  });
});
