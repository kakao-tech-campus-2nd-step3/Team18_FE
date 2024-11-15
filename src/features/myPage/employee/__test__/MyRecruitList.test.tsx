import { screen } from '@testing-library/react';
import { server } from '@/mocks/server';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import EmployeeMyPage from '@/pages/myPage/employee/EmployeeMyPage';
import { renderWithProviders } from '@/__test__/test-utils';

describe('MyRecruitList', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('공고 리스트 데이터 잘 불려와짐', async () => {
    renderWithProviders(<EmployeeMyPage />);

    const recruitCards = await screen.findAllByRole('button', {
      name: /근로계약서 서명하기|근로계약서 다운로드|지원서 검토중|채용 마감/,
    });
    expect(recruitCards).toHaveLength(4);
  });
});
