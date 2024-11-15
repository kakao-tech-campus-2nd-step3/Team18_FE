import { describe, it, expect, vi, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useRecruitmentData } from '../hooks/useRecruitmentData';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { server } from '@mocks/server';

const queryClient = new QueryClient();

describe('useRecruitmentData 훅 테스트', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderUseRecruitmentDataHook = (initialFilter = 'all') => {
    return renderHook(() => useRecruitmentData(initialFilter), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    });
  };

  it('기본 필터로 모든 모집 데이터를 가져온다', async () => {
    const { result } = renderUseRecruitmentDataHook('all');

    await waitFor(() => {
      expect(result.current.recruitmentList.content).toHaveLength(3);
      expect(result.current.recruitmentList.content[0].companyName).toBe('카카오');
    });
  });

  it('필터를 변경했을 때 모집 데이터가 업데이트 된다', async () => {
    const { result } = renderUseRecruitmentDataHook('all');

    await waitFor(() => {
      expect(result.current.recruitmentList.content).toHaveLength(3);
    });

    act(() => {
      result.current.handleFilterChange('salary');
    });

    await waitFor(() => {
      expect(result.current.recruitmentList.content).toHaveLength(3);
      expect(result.current.recruitmentList.content[0].companyName).toBe('카카오');
    });
  });

  it('페이지를 변경했을 때 페이지 번호가 업데이트 된다', async () => {
    const { result } = renderUseRecruitmentDataHook('all');

    await waitFor(() => {
      expect(result.current.page).toBe(0);
    });

    act(() => {
      result.current.handlePageChange(1);
    });

    await waitFor(() => {
      expect(result.current.page).toBe(1);
    });
  });
});
