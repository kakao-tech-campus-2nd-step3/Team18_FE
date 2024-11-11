import { useFetchRecruitments } from '@/apis/home/hooks/queries/useFetchRecruitments';
import { useState, useEffect, startTransition } from 'react';

export function useRecruitmentData(initialFilter = 'all', initialPage = 0) {
  const [filter, setFilter] = useState(initialFilter);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const { data: recruitmentResponse } = useFetchRecruitments(filter, page);

  useEffect(() => {
    if (recruitmentResponse?.pageable.totalPage) {
      setTotalPages(recruitmentResponse.pageable.totalPage);
    }
  }, [recruitmentResponse]);

  const handleFilterChange = (selectedFilter: string) => {
    startTransition(() => {
      setFilter(selectedFilter);
      setPage(0);
    });
  };

  const handlePageChange = (newPage: number) => {
    startTransition(() => {
      setPage(newPage);
    });
  };

  return {
    recruitmentList: recruitmentResponse ?? { content: [], pageable: { totalPage: 1 } },
    page,
    totalPages,
    handleFilterChange,
    handlePageChange,
  };
}
